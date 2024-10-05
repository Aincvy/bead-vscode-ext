import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace bead. */
export namespace bead {

    /** Namespace msg. */
    namespace msg {

        /** MessageType enum. */
        enum MessageType {
            Unknown = 0,
            PingPong = 1,
            TextCompletion = 2,
            FileEdit = 3,
            InitProject = 4,
            OpenFile = 5,
            ChangeConfig = 6,
            FileDelete = 7,
            ClearCache = 8,
            ReParseFile = 9
        }

        /** Properties of a BeadSingleMessage. */
        interface IBeadSingleMessage {

            /** BeadSingleMessage type */
            type?: (bead.msg.MessageType|null);

            /** BeadSingleMessage id */
            id?: (number|null);

            /** BeadSingleMessage msg */
            msg?: (Uint8Array|null);
        }

        /** Represents a BeadSingleMessage. */
        class BeadSingleMessage implements IBeadSingleMessage {

            /**
             * Constructs a new BeadSingleMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: bead.msg.IBeadSingleMessage);

            /** BeadSingleMessage type. */
            public type: bead.msg.MessageType;

            /** BeadSingleMessage id. */
            public id: number;

            /** BeadSingleMessage msg. */
            public msg: Uint8Array;

            /**
             * Creates a new BeadSingleMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BeadSingleMessage instance
             */
            public static create(properties?: bead.msg.IBeadSingleMessage): bead.msg.BeadSingleMessage;

            /**
             * Encodes the specified BeadSingleMessage message. Does not implicitly {@link bead.msg.BeadSingleMessage.verify|verify} messages.
             * @param message BeadSingleMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: bead.msg.IBeadSingleMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BeadSingleMessage message, length delimited. Does not implicitly {@link bead.msg.BeadSingleMessage.verify|verify} messages.
             * @param message BeadSingleMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: bead.msg.IBeadSingleMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BeadSingleMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BeadSingleMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bead.msg.BeadSingleMessage;

            /**
             * Decodes a BeadSingleMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BeadSingleMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bead.msg.BeadSingleMessage;

            /**
             * Verifies a BeadSingleMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BeadSingleMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BeadSingleMessage
             */
            public static fromObject(object: { [k: string]: any }): bead.msg.BeadSingleMessage;

            /**
             * Creates a plain object from a BeadSingleMessage message. Also converts values to other types if specified.
             * @param message BeadSingleMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: bead.msg.BeadSingleMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BeadSingleMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BeadSingleMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ReqTextCompletion. */
        interface IReqTextCompletion {

            /** ReqTextCompletion filepath */
            filepath?: (string|null);

            /** ReqTextCompletion line */
            line?: (number|null);

            /** ReqTextCompletion column */
            column?: (number|null);
        }

        /** Represents a ReqTextCompletion. */
        class ReqTextCompletion implements IReqTextCompletion {

            /**
             * Constructs a new ReqTextCompletion.
             * @param [properties] Properties to set
             */
            constructor(properties?: bead.msg.IReqTextCompletion);

            /** ReqTextCompletion filepath. */
            public filepath: string;

            /** ReqTextCompletion line. */
            public line: number;

            /** ReqTextCompletion column. */
            public column: number;

            /**
             * Creates a new ReqTextCompletion instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReqTextCompletion instance
             */
            public static create(properties?: bead.msg.IReqTextCompletion): bead.msg.ReqTextCompletion;

            /**
             * Encodes the specified ReqTextCompletion message. Does not implicitly {@link bead.msg.ReqTextCompletion.verify|verify} messages.
             * @param message ReqTextCompletion message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: bead.msg.IReqTextCompletion, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReqTextCompletion message, length delimited. Does not implicitly {@link bead.msg.ReqTextCompletion.verify|verify} messages.
             * @param message ReqTextCompletion message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: bead.msg.IReqTextCompletion, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReqTextCompletion message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReqTextCompletion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bead.msg.ReqTextCompletion;

            /**
             * Decodes a ReqTextCompletion message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReqTextCompletion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bead.msg.ReqTextCompletion;

            /**
             * Verifies a ReqTextCompletion message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReqTextCompletion message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReqTextCompletion
             */
            public static fromObject(object: { [k: string]: any }): bead.msg.ReqTextCompletion;

            /**
             * Creates a plain object from a ReqTextCompletion message. Also converts values to other types if specified.
             * @param message ReqTextCompletion
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: bead.msg.ReqTextCompletion, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReqTextCompletion to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ReqTextCompletion
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ResTextCompletion. */
        interface IResTextCompletion {

            /** ResTextCompletion errorType */
            errorType?: (bead.msg.ResTextCompletion.ErrorTypeT|null);

            /** ResTextCompletion content */
            content?: (string|null);
        }

        /** Represents a ResTextCompletion. */
        class ResTextCompletion implements IResTextCompletion {

            /**
             * Constructs a new ResTextCompletion.
             * @param [properties] Properties to set
             */
            constructor(properties?: bead.msg.IResTextCompletion);

            /** ResTextCompletion errorType. */
            public errorType: bead.msg.ResTextCompletion.ErrorTypeT;

            /** ResTextCompletion content. */
            public content: string;

            /**
             * Creates a new ResTextCompletion instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResTextCompletion instance
             */
            public static create(properties?: bead.msg.IResTextCompletion): bead.msg.ResTextCompletion;

            /**
             * Encodes the specified ResTextCompletion message. Does not implicitly {@link bead.msg.ResTextCompletion.verify|verify} messages.
             * @param message ResTextCompletion message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: bead.msg.IResTextCompletion, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResTextCompletion message, length delimited. Does not implicitly {@link bead.msg.ResTextCompletion.verify|verify} messages.
             * @param message ResTextCompletion message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: bead.msg.IResTextCompletion, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResTextCompletion message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResTextCompletion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bead.msg.ResTextCompletion;

            /**
             * Decodes a ResTextCompletion message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResTextCompletion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bead.msg.ResTextCompletion;

            /**
             * Verifies a ResTextCompletion message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResTextCompletion message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResTextCompletion
             */
            public static fromObject(object: { [k: string]: any }): bead.msg.ResTextCompletion;

            /**
             * Creates a plain object from a ResTextCompletion message. Also converts values to other types if specified.
             * @param message ResTextCompletion
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: bead.msg.ResTextCompletion, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResTextCompletion to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ResTextCompletion
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ResTextCompletion {

            /** ErrorTypeT enum. */
            enum ErrorTypeT {
                Success = 0,
                Fail = 1
            }
        }

        /** Properties of a LineAndColumn. */
        interface ILineAndColumn {

            /** LineAndColumn line */
            line?: (number|null);

            /** LineAndColumn column */
            column?: (number|null);
        }

        /** Represents a LineAndColumn. */
        class LineAndColumn implements ILineAndColumn {

            /**
             * Constructs a new LineAndColumn.
             * @param [properties] Properties to set
             */
            constructor(properties?: bead.msg.ILineAndColumn);

            /** LineAndColumn line. */
            public line: number;

            /** LineAndColumn column. */
            public column: number;

            /**
             * Creates a new LineAndColumn instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LineAndColumn instance
             */
            public static create(properties?: bead.msg.ILineAndColumn): bead.msg.LineAndColumn;

            /**
             * Encodes the specified LineAndColumn message. Does not implicitly {@link bead.msg.LineAndColumn.verify|verify} messages.
             * @param message LineAndColumn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: bead.msg.ILineAndColumn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LineAndColumn message, length delimited. Does not implicitly {@link bead.msg.LineAndColumn.verify|verify} messages.
             * @param message LineAndColumn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: bead.msg.ILineAndColumn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LineAndColumn message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LineAndColumn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bead.msg.LineAndColumn;

            /**
             * Decodes a LineAndColumn message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LineAndColumn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bead.msg.LineAndColumn;

            /**
             * Verifies a LineAndColumn message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LineAndColumn message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LineAndColumn
             */
            public static fromObject(object: { [k: string]: any }): bead.msg.LineAndColumn;

            /**
             * Creates a plain object from a LineAndColumn message. Also converts values to other types if specified.
             * @param message LineAndColumn
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: bead.msg.LineAndColumn, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LineAndColumn to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LineAndColumn
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileRange. */
        interface IFileRange {

            /** FileRange start */
            start?: (bead.msg.ILineAndColumn|null);

            /** FileRange end */
            end?: (bead.msg.ILineAndColumn|null);
        }

        /** Represents a FileRange. */
        class FileRange implements IFileRange {

            /**
             * Constructs a new FileRange.
             * @param [properties] Properties to set
             */
            constructor(properties?: bead.msg.IFileRange);

            /** FileRange start. */
            public start?: (bead.msg.ILineAndColumn|null);

            /** FileRange end. */
            public end?: (bead.msg.ILineAndColumn|null);

            /**
             * Creates a new FileRange instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileRange instance
             */
            public static create(properties?: bead.msg.IFileRange): bead.msg.FileRange;

            /**
             * Encodes the specified FileRange message. Does not implicitly {@link bead.msg.FileRange.verify|verify} messages.
             * @param message FileRange message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: bead.msg.IFileRange, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileRange message, length delimited. Does not implicitly {@link bead.msg.FileRange.verify|verify} messages.
             * @param message FileRange message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: bead.msg.IFileRange, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileRange message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bead.msg.FileRange;

            /**
             * Decodes a FileRange message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bead.msg.FileRange;

            /**
             * Verifies a FileRange message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileRange message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileRange
             */
            public static fromObject(object: { [k: string]: any }): bead.msg.FileRange;

            /**
             * Creates a plain object from a FileRange message. Also converts values to other types if specified.
             * @param message FileRange
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: bead.msg.FileRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileRange to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileRange
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ReqFileEdit. */
        interface IReqFileEdit {

            /** ReqFileEdit filepath */
            filepath?: (string|null);

            /** ReqFileEdit range */
            range?: (bead.msg.IFileRange|null);

            /** ReqFileEdit newText */
            newText?: (string|null);
        }

        /** Represents a ReqFileEdit. */
        class ReqFileEdit implements IReqFileEdit {

            /**
             * Constructs a new ReqFileEdit.
             * @param [properties] Properties to set
             */
            constructor(properties?: bead.msg.IReqFileEdit);

            /** ReqFileEdit filepath. */
            public filepath: string;

            /** ReqFileEdit range. */
            public range?: (bead.msg.IFileRange|null);

            /** ReqFileEdit newText. */
            public newText: string;

            /**
             * Creates a new ReqFileEdit instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReqFileEdit instance
             */
            public static create(properties?: bead.msg.IReqFileEdit): bead.msg.ReqFileEdit;

            /**
             * Encodes the specified ReqFileEdit message. Does not implicitly {@link bead.msg.ReqFileEdit.verify|verify} messages.
             * @param message ReqFileEdit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: bead.msg.IReqFileEdit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReqFileEdit message, length delimited. Does not implicitly {@link bead.msg.ReqFileEdit.verify|verify} messages.
             * @param message ReqFileEdit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: bead.msg.IReqFileEdit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReqFileEdit message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReqFileEdit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bead.msg.ReqFileEdit;

            /**
             * Decodes a ReqFileEdit message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReqFileEdit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bead.msg.ReqFileEdit;

            /**
             * Verifies a ReqFileEdit message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReqFileEdit message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReqFileEdit
             */
            public static fromObject(object: { [k: string]: any }): bead.msg.ReqFileEdit;

            /**
             * Creates a plain object from a ReqFileEdit message. Also converts values to other types if specified.
             * @param message ReqFileEdit
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: bead.msg.ReqFileEdit, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReqFileEdit to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ReqFileEdit
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ResFileEdit. */
        interface IResFileEdit {

            /** ResFileEdit errorType */
            errorType?: (bead.msg.ResFileEdit.ErrorTypeT|null);
        }

        /** Represents a ResFileEdit. */
        class ResFileEdit implements IResFileEdit {

            /**
             * Constructs a new ResFileEdit.
             * @param [properties] Properties to set
             */
            constructor(properties?: bead.msg.IResFileEdit);

            /** ResFileEdit errorType. */
            public errorType: bead.msg.ResFileEdit.ErrorTypeT;

            /**
             * Creates a new ResFileEdit instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResFileEdit instance
             */
            public static create(properties?: bead.msg.IResFileEdit): bead.msg.ResFileEdit;

            /**
             * Encodes the specified ResFileEdit message. Does not implicitly {@link bead.msg.ResFileEdit.verify|verify} messages.
             * @param message ResFileEdit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: bead.msg.IResFileEdit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResFileEdit message, length delimited. Does not implicitly {@link bead.msg.ResFileEdit.verify|verify} messages.
             * @param message ResFileEdit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: bead.msg.IResFileEdit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResFileEdit message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResFileEdit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bead.msg.ResFileEdit;

            /**
             * Decodes a ResFileEdit message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResFileEdit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bead.msg.ResFileEdit;

            /**
             * Verifies a ResFileEdit message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResFileEdit message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResFileEdit
             */
            public static fromObject(object: { [k: string]: any }): bead.msg.ResFileEdit;

            /**
             * Creates a plain object from a ResFileEdit message. Also converts values to other types if specified.
             * @param message ResFileEdit
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: bead.msg.ResFileEdit, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResFileEdit to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ResFileEdit
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ResFileEdit {

            /** ErrorTypeT enum. */
            enum ErrorTypeT {
                Success = 0,
                Fail = 1
            }
        }

        /** Properties of a ReqInitProject. */
        interface IReqInitProject {

            /** ReqInitProject projectName */
            projectName?: (string|null);

            /** ReqInitProject projectPath */
            projectPath?: (string|null);
        }

        /** Represents a ReqInitProject. */
        class ReqInitProject implements IReqInitProject {

            /**
             * Constructs a new ReqInitProject.
             * @param [properties] Properties to set
             */
            constructor(properties?: bead.msg.IReqInitProject);

            /** ReqInitProject projectName. */
            public projectName: string;

            /** ReqInitProject projectPath. */
            public projectPath: string;

            /**
             * Creates a new ReqInitProject instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReqInitProject instance
             */
            public static create(properties?: bead.msg.IReqInitProject): bead.msg.ReqInitProject;

            /**
             * Encodes the specified ReqInitProject message. Does not implicitly {@link bead.msg.ReqInitProject.verify|verify} messages.
             * @param message ReqInitProject message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: bead.msg.IReqInitProject, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReqInitProject message, length delimited. Does not implicitly {@link bead.msg.ReqInitProject.verify|verify} messages.
             * @param message ReqInitProject message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: bead.msg.IReqInitProject, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReqInitProject message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReqInitProject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bead.msg.ReqInitProject;

            /**
             * Decodes a ReqInitProject message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReqInitProject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bead.msg.ReqInitProject;

            /**
             * Verifies a ReqInitProject message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReqInitProject message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReqInitProject
             */
            public static fromObject(object: { [k: string]: any }): bead.msg.ReqInitProject;

            /**
             * Creates a plain object from a ReqInitProject message. Also converts values to other types if specified.
             * @param message ReqInitProject
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: bead.msg.ReqInitProject, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReqInitProject to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ReqInitProject
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ResInitProject. */
        interface IResInitProject {

            /** ResInitProject finish */
            finish?: (boolean|null);

            /** ResInitProject success */
            success?: (boolean|null);
        }

        /** Represents a ResInitProject. */
        class ResInitProject implements IResInitProject {

            /**
             * Constructs a new ResInitProject.
             * @param [properties] Properties to set
             */
            constructor(properties?: bead.msg.IResInitProject);

            /** ResInitProject finish. */
            public finish: boolean;

            /** ResInitProject success. */
            public success: boolean;

            /**
             * Creates a new ResInitProject instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResInitProject instance
             */
            public static create(properties?: bead.msg.IResInitProject): bead.msg.ResInitProject;

            /**
             * Encodes the specified ResInitProject message. Does not implicitly {@link bead.msg.ResInitProject.verify|verify} messages.
             * @param message ResInitProject message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: bead.msg.IResInitProject, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResInitProject message, length delimited. Does not implicitly {@link bead.msg.ResInitProject.verify|verify} messages.
             * @param message ResInitProject message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: bead.msg.IResInitProject, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResInitProject message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResInitProject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bead.msg.ResInitProject;

            /**
             * Decodes a ResInitProject message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResInitProject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bead.msg.ResInitProject;

            /**
             * Verifies a ResInitProject message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResInitProject message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResInitProject
             */
            public static fromObject(object: { [k: string]: any }): bead.msg.ResInitProject;

            /**
             * Creates a plain object from a ResInitProject message. Also converts values to other types if specified.
             * @param message ResInitProject
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: bead.msg.ResInitProject, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResInitProject to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ResInitProject
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ReqOpenFile. */
        interface IReqOpenFile {

            /** ReqOpenFile filepath */
            filepath?: (string|null);
        }

        /** Represents a ReqOpenFile. */
        class ReqOpenFile implements IReqOpenFile {

            /**
             * Constructs a new ReqOpenFile.
             * @param [properties] Properties to set
             */
            constructor(properties?: bead.msg.IReqOpenFile);

            /** ReqOpenFile filepath. */
            public filepath: string;

            /**
             * Creates a new ReqOpenFile instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReqOpenFile instance
             */
            public static create(properties?: bead.msg.IReqOpenFile): bead.msg.ReqOpenFile;

            /**
             * Encodes the specified ReqOpenFile message. Does not implicitly {@link bead.msg.ReqOpenFile.verify|verify} messages.
             * @param message ReqOpenFile message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: bead.msg.IReqOpenFile, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReqOpenFile message, length delimited. Does not implicitly {@link bead.msg.ReqOpenFile.verify|verify} messages.
             * @param message ReqOpenFile message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: bead.msg.IReqOpenFile, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReqOpenFile message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReqOpenFile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bead.msg.ReqOpenFile;

            /**
             * Decodes a ReqOpenFile message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReqOpenFile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bead.msg.ReqOpenFile;

            /**
             * Verifies a ReqOpenFile message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReqOpenFile message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReqOpenFile
             */
            public static fromObject(object: { [k: string]: any }): bead.msg.ReqOpenFile;

            /**
             * Creates a plain object from a ReqOpenFile message. Also converts values to other types if specified.
             * @param message ReqOpenFile
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: bead.msg.ReqOpenFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReqOpenFile to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ReqOpenFile
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ResOpenFile. */
        interface IResOpenFile {

            /** ResOpenFile errorType */
            errorType?: (bead.msg.ResOpenFile.ErrorTypeT|null);
        }

        /** Represents a ResOpenFile. */
        class ResOpenFile implements IResOpenFile {

            /**
             * Constructs a new ResOpenFile.
             * @param [properties] Properties to set
             */
            constructor(properties?: bead.msg.IResOpenFile);

            /** ResOpenFile errorType. */
            public errorType: bead.msg.ResOpenFile.ErrorTypeT;

            /**
             * Creates a new ResOpenFile instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResOpenFile instance
             */
            public static create(properties?: bead.msg.IResOpenFile): bead.msg.ResOpenFile;

            /**
             * Encodes the specified ResOpenFile message. Does not implicitly {@link bead.msg.ResOpenFile.verify|verify} messages.
             * @param message ResOpenFile message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: bead.msg.IResOpenFile, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResOpenFile message, length delimited. Does not implicitly {@link bead.msg.ResOpenFile.verify|verify} messages.
             * @param message ResOpenFile message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: bead.msg.IResOpenFile, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResOpenFile message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResOpenFile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bead.msg.ResOpenFile;

            /**
             * Decodes a ResOpenFile message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResOpenFile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bead.msg.ResOpenFile;

            /**
             * Verifies a ResOpenFile message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResOpenFile message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResOpenFile
             */
            public static fromObject(object: { [k: string]: any }): bead.msg.ResOpenFile;

            /**
             * Creates a plain object from a ResOpenFile message. Also converts values to other types if specified.
             * @param message ResOpenFile
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: bead.msg.ResOpenFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResOpenFile to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ResOpenFile
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ResOpenFile {

            /** ErrorTypeT enum. */
            enum ErrorTypeT {
                Success = 0,
                Fail = 1
            }
        }

        /** Properties of a ReqChangeConfig. */
        interface IReqChangeConfig {

            /** ReqChangeConfig topicPrompt */
            topicPrompt?: (string|null);

            /** ReqChangeConfig functionReferenceCount */
            functionReferenceCount?: (number|null);
        }

        /** Represents a ReqChangeConfig. */
        class ReqChangeConfig implements IReqChangeConfig {

            /**
             * Constructs a new ReqChangeConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: bead.msg.IReqChangeConfig);

            /** ReqChangeConfig topicPrompt. */
            public topicPrompt: string;

            /** ReqChangeConfig functionReferenceCount. */
            public functionReferenceCount: number;

            /**
             * Creates a new ReqChangeConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReqChangeConfig instance
             */
            public static create(properties?: bead.msg.IReqChangeConfig): bead.msg.ReqChangeConfig;

            /**
             * Encodes the specified ReqChangeConfig message. Does not implicitly {@link bead.msg.ReqChangeConfig.verify|verify} messages.
             * @param message ReqChangeConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: bead.msg.IReqChangeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReqChangeConfig message, length delimited. Does not implicitly {@link bead.msg.ReqChangeConfig.verify|verify} messages.
             * @param message ReqChangeConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: bead.msg.IReqChangeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReqChangeConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReqChangeConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bead.msg.ReqChangeConfig;

            /**
             * Decodes a ReqChangeConfig message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReqChangeConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bead.msg.ReqChangeConfig;

            /**
             * Verifies a ReqChangeConfig message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReqChangeConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReqChangeConfig
             */
            public static fromObject(object: { [k: string]: any }): bead.msg.ReqChangeConfig;

            /**
             * Creates a plain object from a ReqChangeConfig message. Also converts values to other types if specified.
             * @param message ReqChangeConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: bead.msg.ReqChangeConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReqChangeConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ReqChangeConfig
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ResChangeConfig. */
        interface IResChangeConfig {

            /** ResChangeConfig errorType */
            errorType?: (bead.msg.ResChangeConfig.ErrorTypeT|null);
        }

        /** Represents a ResChangeConfig. */
        class ResChangeConfig implements IResChangeConfig {

            /**
             * Constructs a new ResChangeConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: bead.msg.IResChangeConfig);

            /** ResChangeConfig errorType. */
            public errorType: bead.msg.ResChangeConfig.ErrorTypeT;

            /**
             * Creates a new ResChangeConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResChangeConfig instance
             */
            public static create(properties?: bead.msg.IResChangeConfig): bead.msg.ResChangeConfig;

            /**
             * Encodes the specified ResChangeConfig message. Does not implicitly {@link bead.msg.ResChangeConfig.verify|verify} messages.
             * @param message ResChangeConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: bead.msg.IResChangeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResChangeConfig message, length delimited. Does not implicitly {@link bead.msg.ResChangeConfig.verify|verify} messages.
             * @param message ResChangeConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: bead.msg.IResChangeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResChangeConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResChangeConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bead.msg.ResChangeConfig;

            /**
             * Decodes a ResChangeConfig message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResChangeConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bead.msg.ResChangeConfig;

            /**
             * Verifies a ResChangeConfig message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResChangeConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResChangeConfig
             */
            public static fromObject(object: { [k: string]: any }): bead.msg.ResChangeConfig;

            /**
             * Creates a plain object from a ResChangeConfig message. Also converts values to other types if specified.
             * @param message ResChangeConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: bead.msg.ResChangeConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResChangeConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ResChangeConfig
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ResChangeConfig {

            /** ErrorTypeT enum. */
            enum ErrorTypeT {
                Success = 0,
                Fail = 1
            }
        }

        /** Properties of a ReqFileDelete. */
        interface IReqFileDelete {

            /** ReqFileDelete filepath */
            filepath?: (string|null);
        }

        /** Represents a ReqFileDelete. */
        class ReqFileDelete implements IReqFileDelete {

            /**
             * Constructs a new ReqFileDelete.
             * @param [properties] Properties to set
             */
            constructor(properties?: bead.msg.IReqFileDelete);

            /** ReqFileDelete filepath. */
            public filepath: string;

            /**
             * Creates a new ReqFileDelete instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReqFileDelete instance
             */
            public static create(properties?: bead.msg.IReqFileDelete): bead.msg.ReqFileDelete;

            /**
             * Encodes the specified ReqFileDelete message. Does not implicitly {@link bead.msg.ReqFileDelete.verify|verify} messages.
             * @param message ReqFileDelete message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: bead.msg.IReqFileDelete, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReqFileDelete message, length delimited. Does not implicitly {@link bead.msg.ReqFileDelete.verify|verify} messages.
             * @param message ReqFileDelete message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: bead.msg.IReqFileDelete, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReqFileDelete message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReqFileDelete
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bead.msg.ReqFileDelete;

            /**
             * Decodes a ReqFileDelete message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReqFileDelete
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bead.msg.ReqFileDelete;

            /**
             * Verifies a ReqFileDelete message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReqFileDelete message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReqFileDelete
             */
            public static fromObject(object: { [k: string]: any }): bead.msg.ReqFileDelete;

            /**
             * Creates a plain object from a ReqFileDelete message. Also converts values to other types if specified.
             * @param message ReqFileDelete
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: bead.msg.ReqFileDelete, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReqFileDelete to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ReqFileDelete
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ResFileDelete. */
        interface IResFileDelete {

            /** ResFileDelete success */
            success?: (boolean|null);
        }

        /** Represents a ResFileDelete. */
        class ResFileDelete implements IResFileDelete {

            /**
             * Constructs a new ResFileDelete.
             * @param [properties] Properties to set
             */
            constructor(properties?: bead.msg.IResFileDelete);

            /** ResFileDelete success. */
            public success: boolean;

            /**
             * Creates a new ResFileDelete instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResFileDelete instance
             */
            public static create(properties?: bead.msg.IResFileDelete): bead.msg.ResFileDelete;

            /**
             * Encodes the specified ResFileDelete message. Does not implicitly {@link bead.msg.ResFileDelete.verify|verify} messages.
             * @param message ResFileDelete message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: bead.msg.IResFileDelete, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResFileDelete message, length delimited. Does not implicitly {@link bead.msg.ResFileDelete.verify|verify} messages.
             * @param message ResFileDelete message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: bead.msg.IResFileDelete, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResFileDelete message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResFileDelete
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bead.msg.ResFileDelete;

            /**
             * Decodes a ResFileDelete message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResFileDelete
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bead.msg.ResFileDelete;

            /**
             * Verifies a ResFileDelete message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResFileDelete message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResFileDelete
             */
            public static fromObject(object: { [k: string]: any }): bead.msg.ResFileDelete;

            /**
             * Creates a plain object from a ResFileDelete message. Also converts values to other types if specified.
             * @param message ResFileDelete
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: bead.msg.ResFileDelete, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResFileDelete to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ResFileDelete
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ReqClearCache. */
        interface IReqClearCache {
        }

        /** Represents a ReqClearCache. */
        class ReqClearCache implements IReqClearCache {

            /**
             * Constructs a new ReqClearCache.
             * @param [properties] Properties to set
             */
            constructor(properties?: bead.msg.IReqClearCache);

            /**
             * Creates a new ReqClearCache instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReqClearCache instance
             */
            public static create(properties?: bead.msg.IReqClearCache): bead.msg.ReqClearCache;

            /**
             * Encodes the specified ReqClearCache message. Does not implicitly {@link bead.msg.ReqClearCache.verify|verify} messages.
             * @param message ReqClearCache message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: bead.msg.IReqClearCache, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReqClearCache message, length delimited. Does not implicitly {@link bead.msg.ReqClearCache.verify|verify} messages.
             * @param message ReqClearCache message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: bead.msg.IReqClearCache, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReqClearCache message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReqClearCache
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bead.msg.ReqClearCache;

            /**
             * Decodes a ReqClearCache message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReqClearCache
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bead.msg.ReqClearCache;

            /**
             * Verifies a ReqClearCache message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReqClearCache message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReqClearCache
             */
            public static fromObject(object: { [k: string]: any }): bead.msg.ReqClearCache;

            /**
             * Creates a plain object from a ReqClearCache message. Also converts values to other types if specified.
             * @param message ReqClearCache
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: bead.msg.ReqClearCache, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReqClearCache to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ReqClearCache
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ResClearCache. */
        interface IResClearCache {

            /** ResClearCache success */
            success?: (boolean|null);
        }

        /** Represents a ResClearCache. */
        class ResClearCache implements IResClearCache {

            /**
             * Constructs a new ResClearCache.
             * @param [properties] Properties to set
             */
            constructor(properties?: bead.msg.IResClearCache);

            /** ResClearCache success. */
            public success: boolean;

            /**
             * Creates a new ResClearCache instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResClearCache instance
             */
            public static create(properties?: bead.msg.IResClearCache): bead.msg.ResClearCache;

            /**
             * Encodes the specified ResClearCache message. Does not implicitly {@link bead.msg.ResClearCache.verify|verify} messages.
             * @param message ResClearCache message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: bead.msg.IResClearCache, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResClearCache message, length delimited. Does not implicitly {@link bead.msg.ResClearCache.verify|verify} messages.
             * @param message ResClearCache message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: bead.msg.IResClearCache, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResClearCache message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResClearCache
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bead.msg.ResClearCache;

            /**
             * Decodes a ResClearCache message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResClearCache
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bead.msg.ResClearCache;

            /**
             * Verifies a ResClearCache message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResClearCache message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResClearCache
             */
            public static fromObject(object: { [k: string]: any }): bead.msg.ResClearCache;

            /**
             * Creates a plain object from a ResClearCache message. Also converts values to other types if specified.
             * @param message ResClearCache
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: bead.msg.ResClearCache, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResClearCache to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ResClearCache
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ReqReParseFile. */
        interface IReqReParseFile {

            /** ReqReParseFile filepath */
            filepath?: (string|null);
        }

        /** Represents a ReqReParseFile. */
        class ReqReParseFile implements IReqReParseFile {

            /**
             * Constructs a new ReqReParseFile.
             * @param [properties] Properties to set
             */
            constructor(properties?: bead.msg.IReqReParseFile);

            /** ReqReParseFile filepath. */
            public filepath: string;

            /**
             * Creates a new ReqReParseFile instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReqReParseFile instance
             */
            public static create(properties?: bead.msg.IReqReParseFile): bead.msg.ReqReParseFile;

            /**
             * Encodes the specified ReqReParseFile message. Does not implicitly {@link bead.msg.ReqReParseFile.verify|verify} messages.
             * @param message ReqReParseFile message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: bead.msg.IReqReParseFile, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReqReParseFile message, length delimited. Does not implicitly {@link bead.msg.ReqReParseFile.verify|verify} messages.
             * @param message ReqReParseFile message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: bead.msg.IReqReParseFile, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReqReParseFile message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReqReParseFile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bead.msg.ReqReParseFile;

            /**
             * Decodes a ReqReParseFile message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReqReParseFile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bead.msg.ReqReParseFile;

            /**
             * Verifies a ReqReParseFile message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReqReParseFile message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReqReParseFile
             */
            public static fromObject(object: { [k: string]: any }): bead.msg.ReqReParseFile;

            /**
             * Creates a plain object from a ReqReParseFile message. Also converts values to other types if specified.
             * @param message ReqReParseFile
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: bead.msg.ReqReParseFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReqReParseFile to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ReqReParseFile
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ResReParseFile. */
        interface IResReParseFile {

            /** ResReParseFile errorType */
            errorType?: (bead.msg.ResReParseFile.ErrorTypeT|null);
        }

        /** Represents a ResReParseFile. */
        class ResReParseFile implements IResReParseFile {

            /**
             * Constructs a new ResReParseFile.
             * @param [properties] Properties to set
             */
            constructor(properties?: bead.msg.IResReParseFile);

            /** ResReParseFile errorType. */
            public errorType: bead.msg.ResReParseFile.ErrorTypeT;

            /**
             * Creates a new ResReParseFile instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResReParseFile instance
             */
            public static create(properties?: bead.msg.IResReParseFile): bead.msg.ResReParseFile;

            /**
             * Encodes the specified ResReParseFile message. Does not implicitly {@link bead.msg.ResReParseFile.verify|verify} messages.
             * @param message ResReParseFile message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: bead.msg.IResReParseFile, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResReParseFile message, length delimited. Does not implicitly {@link bead.msg.ResReParseFile.verify|verify} messages.
             * @param message ResReParseFile message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: bead.msg.IResReParseFile, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResReParseFile message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResReParseFile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bead.msg.ResReParseFile;

            /**
             * Decodes a ResReParseFile message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResReParseFile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bead.msg.ResReParseFile;

            /**
             * Verifies a ResReParseFile message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResReParseFile message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResReParseFile
             */
            public static fromObject(object: { [k: string]: any }): bead.msg.ResReParseFile;

            /**
             * Creates a plain object from a ResReParseFile message. Also converts values to other types if specified.
             * @param message ResReParseFile
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: bead.msg.ResReParseFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResReParseFile to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ResReParseFile
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ResReParseFile {

            /** ErrorTypeT enum. */
            enum ErrorTypeT {
                Success = 0,
                Fail = 1
            }
        }
    }
}
