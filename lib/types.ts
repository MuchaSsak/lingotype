export type ErrorNames = "unauthorized" | "not_found";

export type ErrorResource = "auth" | "typing";

export type ErrorMessage = `${ErrorResource}:${ErrorNames}`;
