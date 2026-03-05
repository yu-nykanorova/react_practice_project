export interface IMeta {
    docs_url: string;
    cta: ICta;
    powered_by: string;
    variant: string;
    context: string;
    message: string;
    example_url: string;
    upgrade_url: string;
}

export interface ICta {
    label: string;
    url: string;
}