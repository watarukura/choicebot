import { DefineWorkflow, Schema } from "slack-cloud-sdk/mod.ts";
import { Choice } from "../functions/choice.ts";

export const ChoiceEcho = DefineWorkflow("choice_echo", {
  title: "Choice, echo",
  description: "Choice one, echos it out",
  input_parameters: {
    required: ["csv", "channel"],
    properties: {
      csv: {
        type: Schema.types.string,
        description: "one line csv",
      },
      channel: {
        type: Schema.slack.types.channel_id,
        description: "Channel to echo",
      },
    },
  },
});

const choiceStep = ChoiceEcho.addStep(Choice, {
  csv: ChoiceEcho.inputs.csv,
});

ChoiceEcho.addStep(Schema.slack.functions.SendMessage, {
  channel_id: ChoiceEcho.inputs.channel,
  message: `厳正な抽選の結果、${ChoiceEcho.inputs.csv}の中から「${choiceStep.outputs.member}」が選ばれました！`,
});
