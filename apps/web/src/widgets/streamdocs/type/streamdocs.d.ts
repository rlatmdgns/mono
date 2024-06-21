interface StreamDocsConfig {
  element: HTMLElement
}

interface OpenOptions {
  streamdocsId: string | null | undefined
}

interface StreamDocsDocument {
  open(options?: OpenOptions): Promise<void>

  closeSideView(options?: { type: string }): Promise<void>
}

declare class StreamDocs {
  document: StreamDocsDocument

  constructor(config: StreamDocsConfig)
}
