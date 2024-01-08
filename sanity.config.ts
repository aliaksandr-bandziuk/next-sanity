import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({

  projectId: 'fsxckpe4',
  dataset: 'production',
  title: 'My Personal Website',
  apiVersion: '2024-01-05',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas }

});

export default config;