import { Project } from "slack-cloud-sdk/mod.ts";
import { Choice } from "./functions/choice.ts";
import { ChoiceEcho } from "./workflows/choice_echo.ts";
import { ChoiceEchoShortcut } from "./triggers/choice_echo_shortcut.ts";
// import the Reversals table and include it in the `tables` array
// below to store data via the Tables API
// import { Reversals } from "./tables/reversals.ts";

Project({
  name: "choicebot",
  description:
    "A demo showing how to use Slack workflows, functions, and triggers",
  icon: "assets/icon.png",
  runtime: "deno1.x",
  botScopes: ["commands", "chat:write", "chat:write.public"],
  functions: [Choice],
  workflows: [ChoiceEcho],
  triggers: [ChoiceEchoShortcut],
  tables: [],
  outgoingDomains: [],
});
