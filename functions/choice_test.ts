import {assertEquals} from "https://deno.land/std@0.118.0/testing/asserts.ts";
import {SlackAPIClient} from "slack-cloud-sdk/mod.ts";
import {Choice} from "./choice.ts";

const client = new SlackAPIClient("");

Deno.test("Random choice function test", async () => {
  const inputs = {csv: "a,b,c"};
  const {outputs} = await Choice.run({inputs, client, env: {}});
  assertEquals(outputs?.member, "a" || "b" || "c");
});
