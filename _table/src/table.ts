export interface SupportDetails {
    status: string | null;
    // TODO: Include breakdown XC results for other tools
}

export interface Support {
    "export": SupportDetails;
    "import": SupportDetails;
    "slave": SupportDetails;
    "master": SupportDetails;
}
export interface TableRow {
    support: { [version: string]: Support };
}
export interface Table {
    details: { [tool: string]: TableRow }
}

// TODO: Include code to process a Result into a Table

export const dummyTable: Table = {
    details: {
        "20-sim": {
            support: {
                "FMI 1.0": {
                    "export": { status: null },
                    "import": { status: null },
                    "slave": { status: "available" },
                    "master": { status: "planned" },
                },
                "FMI 2.0": {
                    "export": { status: null },
                    "import": { status: null },
                    "slave": { status: "available" },
                    "master": { status: "planned" },
                }
            }
        }
    }
}