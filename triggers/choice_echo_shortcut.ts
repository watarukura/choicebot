import { DefineTrigger, TriggerTypes } from "slack-cloud-sdk/mod.ts";
import { ChoiceEcho } from "../workflows/choice_echo.ts";

export const ChoiceEchoShortcut = DefineTrigger("choice_echo_shortcut", {
  type: TriggerTypes.Shortcut,
  name: "Choice",
  description: "choice one and echoes it in-channel",
})
  .runs(ChoiceEcho)
  .withInputs((ctx) => ({
    channel: ctx.data.channel_id,
  }));
