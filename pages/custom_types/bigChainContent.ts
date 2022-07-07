export interface Block {
  asset: object;
  id: string;
  inputs: [];
  metadata: null | object;
  operation: string;
  outputs: [];
  version: string;
}
