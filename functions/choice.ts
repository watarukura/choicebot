import {DefineFunction, Schema} from "slack-cloud-sdk/mod.ts";

export const Choice = DefineFunction(
  "choice",
  {
    title: "Choice",
    description: "Takes one line csv and get one",
    input_parameters: {
      required: ["csv"],
      properties: {
        csv: {
          type: Schema.types.string,
          description: "one line csv, like [a, b, c]",
        },
      },
    },
    output_parameters: {
      required: ["member"],
      properties: {
        member: {
          type: Schema.types.string,
          description: "member",
        },
      },
    },
  },
  async ({inputs}) => {
    const members = [
      ...new Set(inputs.csv.split(",").map((member) => member.trim())),
    ];
    const member = members[Math.floor(Math.random() * members.length)];
    return {
      outputs: {member},
    };
  },
);
