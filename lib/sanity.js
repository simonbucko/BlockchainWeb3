import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: lebou79v,
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skgy355qYEQcWdeP0KKVXnKo6HpukBohSqCTFKLJyTaJrrpD8KPGLGQbAvxCDc4WydNipH25qSNKz7J4PinWGj2Yps2PCKIH56x1UliC5TaFLpQlh5VLfYAvMGpW1rOEaxdMCkrzCU3Fkm9rRT2pocHrGgjM74aDrJVx7PrC8HekENzV3wWn",
  useCdn: false,
});
