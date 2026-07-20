import { parse } from "yaml";
import { watch } from "node:fs";
import { Eta } from "eta";

const ROOT = new URL("..", import.meta.url).pathname;
const eta = new Eta({ views: `${ROOT}src`, autoEscape: false });

async function tokensCss(): Promise<string> {
  const glob = new Bun.Glob("_ds/rams-*/tokens/*.css");
  const files: string[] = [];
  for await (const file of glob.scan({ cwd: ROOT, absolute: true })) files.push(file);
  const order = ["fonts.css", "colors.css", "typography.css", "spacing.css"];
  files.sort((a, b) => order.indexOf(a.split("/").pop()!) - order.indexOf(b.split("/").pop()!));
  const contents = await Promise.all(files.map((f) => Bun.file(f).text()));
  return contents.join("\n");
}

async function build(): Promise<string> {
  const [yamlText, tokens, appCss] = await Promise.all([
    Bun.file(`${ROOT}resume.yaml`).text(),
    tokensCss(),
    Bun.file(`${ROOT}src/styles.css`).text(),
  ]);
  const data = { ...parse(yamlText), css: `${tokens}\n${appCss}` };
  const html = await eta.renderAsync("template", data);
  await Bun.write(`${ROOT}dist/index.html`, html);
  return html;
}

const isDev = process.argv.includes("--dev");
let html = await build();
console.log(`built dist/index.html`);

if (isDev) {
  const rebuild = async (reason: string) => {
    try {
      html = await build();
      console.log(`rebuilt (${reason})`);
    } catch (err) {
      console.error(`build failed (${reason}):`, err);
    }
  };

  watch(`${ROOT}resume.yaml`, () => rebuild("resume.yaml"));
  watch(`${ROOT}src`, { recursive: true }, (_e, name) => rebuild(name ?? "src"));
  watch(`${ROOT}_ds`, { recursive: true }, (_e, name) => rebuild(name ?? "_ds"));

  const server = Bun.serve({
    port: 3000,
    fetch() {
      return new Response(html, { headers: { "content-type": "text/html; charset=utf-8" } });
    },
  });
  console.log(`serving http://localhost:${server.port}`);
}
