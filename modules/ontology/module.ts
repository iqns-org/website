import { defineNuxtModule, addPlugin } from '@nuxt/kit'
import path from 'node:path'
import fg from 'fast-glob'
import { buildOntology } from './build'

export interface OntologyModuleOptions {
  rdfDir: string
  rdfFilePattern: string
  outDir: string
}

export default defineNuxtModule<OntologyModuleOptions>({
  meta: {
    name: 'ontology',
    configKey: 'ontology'
  },

  defaults: {
    rdfDir: 'rdf',
    rdfFilePattern: '**/*.ttl',
    outDir: 'public/v1'
  },

  async setup(options, nuxt) {
    const rdfPath = path.resolve(nuxt.options.rootDir, options.rdfDir)
    const outPath = path.resolve(nuxt.options.rootDir, options.outDir)

    // resolve all TTL files deterministically at build time
    const rdfFiles = fg.sync(options.rdfFilePattern, {
      cwd: rdfPath,
      absolute: true
    })

    // BUILD TIME HOOK
    nuxt.hook('build:before', async () => {
      await buildOntology({
        rdfFiles,
        outPath
      })
    })

    // runtime plugin (consumer only)
    addPlugin({
      src: path.resolve(__dirname, './runtime/plugin')
    })
  }
})