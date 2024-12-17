// This file is auto-generated by @hey-api/openapi-ts

export type Constraints = {
    max_cost?: number;
    max_emissions?: number;
    max_risk?: number;
};

export type Goals = {
    green?: number;
    cheap?: number;
    safe?: number;
};

export type HTTPValidationError = {
    detail?: Array<ValidationError>;
};

export type OptimizeParams = {
    sources: Array<Source>;
    goals: Goals;
    constraints: Constraints;
};

export type Source = {
    cost: number;
    emissions: number;
    risk?: number;
    p_min?: number;
    p_max?: number;
    economic_risk?: number;
    operational_risk?: number;
    regulatory_risk?: number;
    environmental_risk?: number;
};

export type ValidationError = {
    loc: Array<(string | number)>;
    msg: string;
    type: string;
};

export type OptimizePortfolioData = {
    body: OptimizeParams;
};

export type OptimizePortfolioResponse = ((Array<(number)> | null));

export type OptimizePortfolioError = (HTTPValidationError);