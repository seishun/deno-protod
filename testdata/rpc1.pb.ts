// Generated by protod v0.1.3
/**
 * This is a generic file comment
 */

import {
  FieldSet,
  JSON,
  fromBytes,
  fromJSON,
  int32Field,
  stringField,
  toBytes,
  toJSON,
} from "../mod.ts";

/**
 * This is a comment for MyRequest
 */
export class MyRequest {
  /**
   * This is a comment for path
   */
  path: string;

  constructor(init: Partial<MyRequest>) {
    this.path = init.path ?? "";
  }

  static fields: FieldSet<MyRequest> = {
    path: [1, stringField],
  };

  static fromBytes(bytes: Uint8Array): MyRequest {
    return new MyRequest(
      fromBytes<MyRequest>(bytes, MyRequest.fields),
    );
  }

  static fromJSON(json: JSON): MyRequest {
    return new MyRequest(
      fromJSON<MyRequest>(json, MyRequest.fields),
    );
  }

  toBytes(): Uint8Array {
    return toBytes<MyRequest>(this, MyRequest.fields);
  }

  toJSON() {
    return toJSON<MyRequest>(this, MyRequest.fields);
  }
}

/**
 * This is a comment for MyResponse
 */
export class MyResponse {
  /**
   * This is a comment for status
   */
  status: number;

  constructor(init: Partial<MyResponse>) {
    this.status = init.status ?? 0;
  }

  static fields: FieldSet<MyResponse> = {
    status: [2, int32Field],
  };

  static fromBytes(bytes: Uint8Array): MyResponse {
    return new MyResponse(
      fromBytes<MyResponse>(bytes, MyResponse.fields),
    );
  }

  static fromJSON(json: JSON): MyResponse {
    return new MyResponse(
      fromJSON<MyResponse>(json, MyResponse.fields),
    );
  }

  toBytes(): Uint8Array {
    return toBytes<MyResponse>(this, MyResponse.fields);
  }

  toJSON() {
    return toJSON<MyResponse>(this, MyResponse.fields);
  }
}
