import { Criteria } from "../types/criteria"

export default {
    provider: "twitter",
    parameters: [
        { name: "followers", type: "number" },
        { name: "tweets", type: "number" },
        { name: "botometerOverallScore", type: "number" },
        { name: "verifiedProfile", type: "boolean" },
        { name: "defaultProfilePicture", type: "boolean" }
    ],
    reputations: [
        {
            name: "gold",
            rules: [
                {
                    parameter: "verifiedProfile",
                    value: true
                },
                {
                    parameter: "followers",
                    value: {
                        min: 7000
                    }
                },
                {
                    parameter: "botometerOverallScore",
                    value: {
                        max: 1
                    }
                }
            ]
        },
        {
            name: "silver",
            rules: [
                {
                    parameter: "followers",
                    value: {
                        min: 2000
                    }
                },
                {
                    parameter: "botometerOverallScore",
                    value: {
                        max: 2
                    }
                }
            ]
        },
        {
            name: "bronze",
            rules: [
                {
                    parameter: "defaultProfilePicture",
                    value: false
                },
                {
                    parameter: "followers",
                    value: {
                        max: 2
                    }
                },
                {
                    parameter: "tweets",
                    value: 0
                }
            ]
        }
    ]
} as Criteria