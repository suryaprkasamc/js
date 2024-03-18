
const data = [{
    "app_id": 2,
    "app_name": "Req AI",
    "url": "https://reqai.innoboon.com",
    "features": [
        {
            "id": 9,
            "feature_name": "Review Requirements",
            "description": "Improves requirement clarity and correctness",
            "end_point": "https://reqai.innoboon.com/features/rev-req"
        },
        {
            "id": 10,
            "feature_name": "Classify Requirements",
            "description": "Categorizes requirements systematically",
            "end_point": "https://reqai.innoboon.com/features/class-req"
        },
        {
            "id": 11,
            "feature_name": "Group Requirements",
            "description": "Organizes similar requirements together",
            "end_point": "https://reqai.innoboon.com/features/group-req"
        },
        {
            "id": 12,
            "feature_name": "Generate Verification Criteria",
            "description": "Defines criteria for requirement validation",
            "end_point": "https://reqai.innoboon.com/features/gen-ver"
        },
        {
            "id": 13,
            "feature_name": "Summarize Requirements and Q&A",
            "description": "Briefs requirements and answers queries",
            "end_point": "https://reqai.innoboon.com/features/summarize-qa"
        },
        {
            "id": 5,
            "feature_name": "Generate Requirements",
            "description": "Creates formal requirement specifications",
            "end_point": "https://reqai.innoboon.com/features/gen-req"
        }
    ]
},
{
    "app_id": 5,
    "app_name": "GADA",
    "url": "https://gada-web-a7s2p6zxjq-as.a.run.app/",
    "features": [
        {
            "id": 21,
            "feature_name": "Lead Scoring",
            "description": "Prioritizes potential customer leads.",
            "end_point": "https://gada-web-a7s2p6zxjq-as.a.run.app//lead-scoring"
        },
        {
            "id": 22,
            "feature_name": "Product Recomendation",
            "description": "Suggests relevant products.",
            "end_point": "https://gada-web-a7s2p6zxjq-as.a.run.app//product-recommendation"
        },
        {
            "id": 23,
            "feature_name": "Time Series Forecasting",
            "description": "Predicts future data[0] trends.",
            "end_point": "https://gada-web-a7s2p6zxjq-as.a.run.app//time-series"
        },
        {
            "id": 24,
            "feature_name": "Sales Forecasting",
            "description": "Projects future sales volumes.",
            "end_point": "https://gada-web-a7s2p6zxjq-as.a.run.app//sales-forecasting"
        }
    ]
}]


const modifiedData = data.map((x) => {
    let rows = {
        columns: [
            {
                cards: [
                    { title: x.app_name, id: x.app_id }
                ],
                class: "col-md-4 Req-class"
            }
        ]
    };

    if (x.features.length === 6) {
        const partSize = Math.ceil(x.features.length / 3);
        const columns = [];

        for (let i = 0; i < 3; i++) {
            const start = i * partSize;
            const end = start + partSize;
            const columnFeatures = x.features.slice(start, end);

            columns.push({
                cards: columnFeatures.map((f) => ({
                    id: f.id,
                    title: f.feature_name,
                    height: "170px"
                })),
                class: "col-md-2-6666"
            });
        }

        rows.columns.push(...columns);
    }
    else if (x.features.length === 5) {
        const firstBlock = x.features.slice(0, 2);
        const secondBlock = x.features.slice(2, 1);
        const thirdBlock = x.features.slice(3, 5)

        rows.columns.push({
            cards: firstBlock.map((f) => ({
                id: f.id,
                title: f.feature_name,
                height: "170px"
            })),
            class: "col-md-2-6666"
        });

        rows.columns.push({
            cards: secondBlock.map((f) => ({
                id: f.id,
                title: f.feature_name,
                height: "170px"
            })),
            class: "col-md-2-6666"
        });
        rows.columns.push({
            cards: thirdBlock.map((f) => ({
                id: f.id,
                title: f.feature_name,
                height: "170px"
            })),
            class: "col-md-2-6666"
        });

    }
    else if (x.features.length === 4) {
        const firstBlock = x.features.slice(0, 1);
        const secondBlock = x.features.slice(1, 3);
        const thirdBlock = x.features.slice(-1)

        rows.columns.push({
            cards: firstBlock.map((f) => ({
                id: f.id,
                title: f.feature_name,
                height: "170px"
            })),
            class: "col-md-2-6666"
        });

        rows.columns.push({
            cards: secondBlock.map((f) => ({
                id: f.id,
                title: f.feature_name,
                height: "170px"
            })),
            class: "col-md-2-6666"
        });
        rows.columns.push({
            cards: thirdBlock.map((f) => ({
                id: f.id,
                title: f.feature_name,
                height: "170px"
            })),
            class: "col-md-2-6666"
        });

    }
    else if (x.features.length === 3) {
        const firstBlock = x.features.slice(0, 1);
        const secondBlock = x.features.slice(1, 2);
        const thirdBlock = x.features.slice(-1)

        rows.columns.push({
            cards: firstBlock.map((f) => ({
                id: f.id,
                title: f.feature_name,
                height: "170px"
            })),
            class: "col-md-2-6666"
        });

        rows.columns.push({
            cards: secondBlock.map((f) => ({
                id: f.id,
                title: f.feature_name,
                height: "170px"
            })),
            class: "col-md-2-6666"
        });
        rows.columns.push({
            cards: thirdBlock.map((f) => ({
                id: f.id,
                title: f.feature_name,
                height: "170px"
            })),
            class: "col-md-2-6666"
        });

    }
    else if (x.features.length === 2) {
        const firstBlock = x.features.slice(0, 2);
        const secondBlock = x.features.slice(2, 4);

        rows.columns.push({
            cards: firstBlock.map((f) => ({
                id: f.id,
                title: f.feature_name,
                height: "170px"
            })),
            class: "col-md-2-6666"
        });

        rows.columns.push({
            cards: secondBlock.map((f) => ({
                id: f.id,
                title: f.feature_name,
                height: "170px"
            })),
            class: "col-md-2-6666"
        });

    }
    else {
        // Features array length is not 6, add them as usual
        x.features.forEach((f) => {
            rows.columns.push({
                cards: [
                    { id: f.id, title: f.feature_name, height: "170px" }
                ],
                class: "col-md-2-6666"
            });
        });
    }

    return rows;
});

console.log(modifiedData);


