export default defineNuxtPlugin(() => {
  const base = '/v1'

  const manifest = useState<any>('ontology:manifest', () => null)
  const graph = useState<any>('ontology:graph', () => null)
  const iriMap = useState<string[]>('ontology:iriMap', () => [])

  const loadManifest = async () => {
    if (!manifest.value) {
      manifest.value = await $fetch(`${base}/manifest.json`)
    }
    return manifest.value
  }

  const loadGraph = async () => {
    if (!graph.value) {
      graph.value = await $fetch(`${base}/graph.core.json`)
    }
    return graph.value
  }

  const loadIriMap = async () => {
    if (iriMap.value.length === 0) {
      iriMap.value = await $fetch(`${base}/iriMap.json`)
    }
    return iriMap.value
  }

  const search = async (term: string) => {
    const idx = await $fetch<Record<string, number[]>>(
      `${base}/search.json`
    )

    return idx[term.toLowerCase()] ?? []
  }

  return {
    provide: {
      ontology: {
        manifest: loadManifest,
        graph: loadGraph,
        iriMap: loadIriMap,
        search
      }
    }
  }
})