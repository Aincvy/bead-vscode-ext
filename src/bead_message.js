/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.bead = (function() {

    /**
     * Namespace bead.
     * @exports bead
     * @namespace
     */
    var bead = {};

    bead.msg = (function() {

        /**
         * Namespace msg.
         * @memberof bead
         * @namespace
         */
        var msg = {};

        /**
         * MessageType enum.
         * @name bead.msg.MessageType
         * @enum {number}
         * @property {number} Unknown=0 Unknown value
         * @property {number} PingPong=1 PingPong value
         * @property {number} TextCompletion=2 TextCompletion value
         * @property {number} FileEdit=3 FileEdit value
         * @property {number} InitProject=4 InitProject value
         * @property {number} OpenFile=5 OpenFile value
         * @property {number} ChangeConfig=6 ChangeConfig value
         * @property {number} FileDelete=7 FileDelete value
         * @property {number} ClearCache=8 ClearCache value
         * @property {number} ReParseFile=9 ReParseFile value
         * @property {number} ExportTypePrompt=10 ExportTypePrompt value
         */
        msg.MessageType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Unknown"] = 0;
            values[valuesById[1] = "PingPong"] = 1;
            values[valuesById[2] = "TextCompletion"] = 2;
            values[valuesById[3] = "FileEdit"] = 3;
            values[valuesById[4] = "InitProject"] = 4;
            values[valuesById[5] = "OpenFile"] = 5;
            values[valuesById[6] = "ChangeConfig"] = 6;
            values[valuesById[7] = "FileDelete"] = 7;
            values[valuesById[8] = "ClearCache"] = 8;
            values[valuesById[9] = "ReParseFile"] = 9;
            values[valuesById[10] = "ExportTypePrompt"] = 10;
            return values;
        })();

        msg.BeadSingleMessage = (function() {

            /**
             * Properties of a BeadSingleMessage.
             * @memberof bead.msg
             * @interface IBeadSingleMessage
             * @property {bead.msg.MessageType|null} [type] BeadSingleMessage type
             * @property {number|null} [id] BeadSingleMessage id
             * @property {Uint8Array|null} [msg] BeadSingleMessage msg
             */

            /**
             * Constructs a new BeadSingleMessage.
             * @memberof bead.msg
             * @classdesc Represents a BeadSingleMessage.
             * @implements IBeadSingleMessage
             * @constructor
             * @param {bead.msg.IBeadSingleMessage=} [properties] Properties to set
             */
            function BeadSingleMessage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BeadSingleMessage type.
             * @member {bead.msg.MessageType} type
             * @memberof bead.msg.BeadSingleMessage
             * @instance
             */
            BeadSingleMessage.prototype.type = 0;

            /**
             * BeadSingleMessage id.
             * @member {number} id
             * @memberof bead.msg.BeadSingleMessage
             * @instance
             */
            BeadSingleMessage.prototype.id = 0;

            /**
             * BeadSingleMessage msg.
             * @member {Uint8Array} msg
             * @memberof bead.msg.BeadSingleMessage
             * @instance
             */
            BeadSingleMessage.prototype.msg = $util.newBuffer([]);

            /**
             * Creates a new BeadSingleMessage instance using the specified properties.
             * @function create
             * @memberof bead.msg.BeadSingleMessage
             * @static
             * @param {bead.msg.IBeadSingleMessage=} [properties] Properties to set
             * @returns {bead.msg.BeadSingleMessage} BeadSingleMessage instance
             */
            BeadSingleMessage.create = function create(properties) {
                return new BeadSingleMessage(properties);
            };

            /**
             * Encodes the specified BeadSingleMessage message. Does not implicitly {@link bead.msg.BeadSingleMessage.verify|verify} messages.
             * @function encode
             * @memberof bead.msg.BeadSingleMessage
             * @static
             * @param {bead.msg.IBeadSingleMessage} message BeadSingleMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BeadSingleMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
                if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.msg);
                return writer;
            };

            /**
             * Encodes the specified BeadSingleMessage message, length delimited. Does not implicitly {@link bead.msg.BeadSingleMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bead.msg.BeadSingleMessage
             * @static
             * @param {bead.msg.IBeadSingleMessage} message BeadSingleMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BeadSingleMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BeadSingleMessage message from the specified reader or buffer.
             * @function decode
             * @memberof bead.msg.BeadSingleMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bead.msg.BeadSingleMessage} BeadSingleMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BeadSingleMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bead.msg.BeadSingleMessage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.type = reader.int32();
                            break;
                        }
                    case 2: {
                            message.id = reader.int32();
                            break;
                        }
                    case 3: {
                            message.msg = reader.bytes();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BeadSingleMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bead.msg.BeadSingleMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bead.msg.BeadSingleMessage} BeadSingleMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BeadSingleMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BeadSingleMessage message.
             * @function verify
             * @memberof bead.msg.BeadSingleMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BeadSingleMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                        break;
                    }
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.msg != null && message.hasOwnProperty("msg"))
                    if (!(message.msg && typeof message.msg.length === "number" || $util.isString(message.msg)))
                        return "msg: buffer expected";
                return null;
            };

            /**
             * Creates a BeadSingleMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bead.msg.BeadSingleMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bead.msg.BeadSingleMessage} BeadSingleMessage
             */
            BeadSingleMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.bead.msg.BeadSingleMessage)
                    return object;
                var message = new $root.bead.msg.BeadSingleMessage();
                switch (object.type) {
                default:
                    if (typeof object.type === "number") {
                        message.type = object.type;
                        break;
                    }
                    break;
                case "Unknown":
                case 0:
                    message.type = 0;
                    break;
                case "PingPong":
                case 1:
                    message.type = 1;
                    break;
                case "TextCompletion":
                case 2:
                    message.type = 2;
                    break;
                case "FileEdit":
                case 3:
                    message.type = 3;
                    break;
                case "InitProject":
                case 4:
                    message.type = 4;
                    break;
                case "OpenFile":
                case 5:
                    message.type = 5;
                    break;
                case "ChangeConfig":
                case 6:
                    message.type = 6;
                    break;
                case "FileDelete":
                case 7:
                    message.type = 7;
                    break;
                case "ClearCache":
                case 8:
                    message.type = 8;
                    break;
                case "ReParseFile":
                case 9:
                    message.type = 9;
                    break;
                case "ExportTypePrompt":
                case 10:
                    message.type = 10;
                    break;
                }
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.msg != null)
                    if (typeof object.msg === "string")
                        $util.base64.decode(object.msg, message.msg = $util.newBuffer($util.base64.length(object.msg)), 0);
                    else if (object.msg.length >= 0)
                        message.msg = object.msg;
                return message;
            };

            /**
             * Creates a plain object from a BeadSingleMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bead.msg.BeadSingleMessage
             * @static
             * @param {bead.msg.BeadSingleMessage} message BeadSingleMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BeadSingleMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type = options.enums === String ? "Unknown" : 0;
                    object.id = 0;
                    if (options.bytes === String)
                        object.msg = "";
                    else {
                        object.msg = [];
                        if (options.bytes !== Array)
                            object.msg = $util.newBuffer(object.msg);
                    }
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.bead.msg.MessageType[message.type] === undefined ? message.type : $root.bead.msg.MessageType[message.type] : message.type;
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.msg != null && message.hasOwnProperty("msg"))
                    object.msg = options.bytes === String ? $util.base64.encode(message.msg, 0, message.msg.length) : options.bytes === Array ? Array.prototype.slice.call(message.msg) : message.msg;
                return object;
            };

            /**
             * Converts this BeadSingleMessage to JSON.
             * @function toJSON
             * @memberof bead.msg.BeadSingleMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BeadSingleMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BeadSingleMessage
             * @function getTypeUrl
             * @memberof bead.msg.BeadSingleMessage
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BeadSingleMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bead.msg.BeadSingleMessage";
            };

            return BeadSingleMessage;
        })();

        msg.ReqTextCompletion = (function() {

            /**
             * Properties of a ReqTextCompletion.
             * @memberof bead.msg
             * @interface IReqTextCompletion
             * @property {string|null} [filepath] ReqTextCompletion filepath
             * @property {number|null} [line] ReqTextCompletion line
             * @property {number|null} [column] ReqTextCompletion column
             */

            /**
             * Constructs a new ReqTextCompletion.
             * @memberof bead.msg
             * @classdesc Represents a ReqTextCompletion.
             * @implements IReqTextCompletion
             * @constructor
             * @param {bead.msg.IReqTextCompletion=} [properties] Properties to set
             */
            function ReqTextCompletion(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReqTextCompletion filepath.
             * @member {string} filepath
             * @memberof bead.msg.ReqTextCompletion
             * @instance
             */
            ReqTextCompletion.prototype.filepath = "";

            /**
             * ReqTextCompletion line.
             * @member {number} line
             * @memberof bead.msg.ReqTextCompletion
             * @instance
             */
            ReqTextCompletion.prototype.line = 0;

            /**
             * ReqTextCompletion column.
             * @member {number} column
             * @memberof bead.msg.ReqTextCompletion
             * @instance
             */
            ReqTextCompletion.prototype.column = 0;

            /**
             * Creates a new ReqTextCompletion instance using the specified properties.
             * @function create
             * @memberof bead.msg.ReqTextCompletion
             * @static
             * @param {bead.msg.IReqTextCompletion=} [properties] Properties to set
             * @returns {bead.msg.ReqTextCompletion} ReqTextCompletion instance
             */
            ReqTextCompletion.create = function create(properties) {
                return new ReqTextCompletion(properties);
            };

            /**
             * Encodes the specified ReqTextCompletion message. Does not implicitly {@link bead.msg.ReqTextCompletion.verify|verify} messages.
             * @function encode
             * @memberof bead.msg.ReqTextCompletion
             * @static
             * @param {bead.msg.IReqTextCompletion} message ReqTextCompletion message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqTextCompletion.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.filepath != null && Object.hasOwnProperty.call(message, "filepath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.filepath);
                if (message.line != null && Object.hasOwnProperty.call(message, "line"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.line);
                if (message.column != null && Object.hasOwnProperty.call(message, "column"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.column);
                return writer;
            };

            /**
             * Encodes the specified ReqTextCompletion message, length delimited. Does not implicitly {@link bead.msg.ReqTextCompletion.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bead.msg.ReqTextCompletion
             * @static
             * @param {bead.msg.IReqTextCompletion} message ReqTextCompletion message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqTextCompletion.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReqTextCompletion message from the specified reader or buffer.
             * @function decode
             * @memberof bead.msg.ReqTextCompletion
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bead.msg.ReqTextCompletion} ReqTextCompletion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqTextCompletion.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bead.msg.ReqTextCompletion();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.filepath = reader.string();
                            break;
                        }
                    case 2: {
                            message.line = reader.int32();
                            break;
                        }
                    case 3: {
                            message.column = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ReqTextCompletion message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bead.msg.ReqTextCompletion
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bead.msg.ReqTextCompletion} ReqTextCompletion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqTextCompletion.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReqTextCompletion message.
             * @function verify
             * @memberof bead.msg.ReqTextCompletion
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReqTextCompletion.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.filepath != null && message.hasOwnProperty("filepath"))
                    if (!$util.isString(message.filepath))
                        return "filepath: string expected";
                if (message.line != null && message.hasOwnProperty("line"))
                    if (!$util.isInteger(message.line))
                        return "line: integer expected";
                if (message.column != null && message.hasOwnProperty("column"))
                    if (!$util.isInteger(message.column))
                        return "column: integer expected";
                return null;
            };

            /**
             * Creates a ReqTextCompletion message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bead.msg.ReqTextCompletion
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bead.msg.ReqTextCompletion} ReqTextCompletion
             */
            ReqTextCompletion.fromObject = function fromObject(object) {
                if (object instanceof $root.bead.msg.ReqTextCompletion)
                    return object;
                var message = new $root.bead.msg.ReqTextCompletion();
                if (object.filepath != null)
                    message.filepath = String(object.filepath);
                if (object.line != null)
                    message.line = object.line | 0;
                if (object.column != null)
                    message.column = object.column | 0;
                return message;
            };

            /**
             * Creates a plain object from a ReqTextCompletion message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bead.msg.ReqTextCompletion
             * @static
             * @param {bead.msg.ReqTextCompletion} message ReqTextCompletion
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReqTextCompletion.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.filepath = "";
                    object.line = 0;
                    object.column = 0;
                }
                if (message.filepath != null && message.hasOwnProperty("filepath"))
                    object.filepath = message.filepath;
                if (message.line != null && message.hasOwnProperty("line"))
                    object.line = message.line;
                if (message.column != null && message.hasOwnProperty("column"))
                    object.column = message.column;
                return object;
            };

            /**
             * Converts this ReqTextCompletion to JSON.
             * @function toJSON
             * @memberof bead.msg.ReqTextCompletion
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReqTextCompletion.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ReqTextCompletion
             * @function getTypeUrl
             * @memberof bead.msg.ReqTextCompletion
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ReqTextCompletion.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bead.msg.ReqTextCompletion";
            };

            return ReqTextCompletion;
        })();

        msg.ResTextCompletion = (function() {

            /**
             * Properties of a ResTextCompletion.
             * @memberof bead.msg
             * @interface IResTextCompletion
             * @property {bead.msg.ResTextCompletion.ErrorTypeT|null} [errorType] ResTextCompletion errorType
             * @property {string|null} [content] ResTextCompletion content
             */

            /**
             * Constructs a new ResTextCompletion.
             * @memberof bead.msg
             * @classdesc Represents a ResTextCompletion.
             * @implements IResTextCompletion
             * @constructor
             * @param {bead.msg.IResTextCompletion=} [properties] Properties to set
             */
            function ResTextCompletion(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResTextCompletion errorType.
             * @member {bead.msg.ResTextCompletion.ErrorTypeT} errorType
             * @memberof bead.msg.ResTextCompletion
             * @instance
             */
            ResTextCompletion.prototype.errorType = 0;

            /**
             * ResTextCompletion content.
             * @member {string} content
             * @memberof bead.msg.ResTextCompletion
             * @instance
             */
            ResTextCompletion.prototype.content = "";

            /**
             * Creates a new ResTextCompletion instance using the specified properties.
             * @function create
             * @memberof bead.msg.ResTextCompletion
             * @static
             * @param {bead.msg.IResTextCompletion=} [properties] Properties to set
             * @returns {bead.msg.ResTextCompletion} ResTextCompletion instance
             */
            ResTextCompletion.create = function create(properties) {
                return new ResTextCompletion(properties);
            };

            /**
             * Encodes the specified ResTextCompletion message. Does not implicitly {@link bead.msg.ResTextCompletion.verify|verify} messages.
             * @function encode
             * @memberof bead.msg.ResTextCompletion
             * @static
             * @param {bead.msg.IResTextCompletion} message ResTextCompletion message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResTextCompletion.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.errorType != null && Object.hasOwnProperty.call(message, "errorType"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errorType);
                if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
                return writer;
            };

            /**
             * Encodes the specified ResTextCompletion message, length delimited. Does not implicitly {@link bead.msg.ResTextCompletion.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bead.msg.ResTextCompletion
             * @static
             * @param {bead.msg.IResTextCompletion} message ResTextCompletion message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResTextCompletion.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResTextCompletion message from the specified reader or buffer.
             * @function decode
             * @memberof bead.msg.ResTextCompletion
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bead.msg.ResTextCompletion} ResTextCompletion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResTextCompletion.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bead.msg.ResTextCompletion();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.errorType = reader.int32();
                            break;
                        }
                    case 2: {
                            message.content = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResTextCompletion message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bead.msg.ResTextCompletion
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bead.msg.ResTextCompletion} ResTextCompletion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResTextCompletion.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResTextCompletion message.
             * @function verify
             * @memberof bead.msg.ResTextCompletion
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResTextCompletion.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.errorType != null && message.hasOwnProperty("errorType"))
                    switch (message.errorType) {
                    default:
                        return "errorType: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.content != null && message.hasOwnProperty("content"))
                    if (!$util.isString(message.content))
                        return "content: string expected";
                return null;
            };

            /**
             * Creates a ResTextCompletion message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bead.msg.ResTextCompletion
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bead.msg.ResTextCompletion} ResTextCompletion
             */
            ResTextCompletion.fromObject = function fromObject(object) {
                if (object instanceof $root.bead.msg.ResTextCompletion)
                    return object;
                var message = new $root.bead.msg.ResTextCompletion();
                switch (object.errorType) {
                default:
                    if (typeof object.errorType === "number") {
                        message.errorType = object.errorType;
                        break;
                    }
                    break;
                case "Success":
                case 0:
                    message.errorType = 0;
                    break;
                case "Fail":
                case 1:
                    message.errorType = 1;
                    break;
                }
                if (object.content != null)
                    message.content = String(object.content);
                return message;
            };

            /**
             * Creates a plain object from a ResTextCompletion message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bead.msg.ResTextCompletion
             * @static
             * @param {bead.msg.ResTextCompletion} message ResTextCompletion
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResTextCompletion.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.errorType = options.enums === String ? "Success" : 0;
                    object.content = "";
                }
                if (message.errorType != null && message.hasOwnProperty("errorType"))
                    object.errorType = options.enums === String ? $root.bead.msg.ResTextCompletion.ErrorTypeT[message.errorType] === undefined ? message.errorType : $root.bead.msg.ResTextCompletion.ErrorTypeT[message.errorType] : message.errorType;
                if (message.content != null && message.hasOwnProperty("content"))
                    object.content = message.content;
                return object;
            };

            /**
             * Converts this ResTextCompletion to JSON.
             * @function toJSON
             * @memberof bead.msg.ResTextCompletion
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResTextCompletion.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ResTextCompletion
             * @function getTypeUrl
             * @memberof bead.msg.ResTextCompletion
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ResTextCompletion.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bead.msg.ResTextCompletion";
            };

            /**
             * ErrorTypeT enum.
             * @name bead.msg.ResTextCompletion.ErrorTypeT
             * @enum {number}
             * @property {number} Success=0 Success value
             * @property {number} Fail=1 Fail value
             */
            ResTextCompletion.ErrorTypeT = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "Success"] = 0;
                values[valuesById[1] = "Fail"] = 1;
                return values;
            })();

            return ResTextCompletion;
        })();

        msg.LineAndColumn = (function() {

            /**
             * Properties of a LineAndColumn.
             * @memberof bead.msg
             * @interface ILineAndColumn
             * @property {number|null} [line] LineAndColumn line
             * @property {number|null} [column] LineAndColumn column
             */

            /**
             * Constructs a new LineAndColumn.
             * @memberof bead.msg
             * @classdesc Represents a LineAndColumn.
             * @implements ILineAndColumn
             * @constructor
             * @param {bead.msg.ILineAndColumn=} [properties] Properties to set
             */
            function LineAndColumn(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LineAndColumn line.
             * @member {number} line
             * @memberof bead.msg.LineAndColumn
             * @instance
             */
            LineAndColumn.prototype.line = 0;

            /**
             * LineAndColumn column.
             * @member {number} column
             * @memberof bead.msg.LineAndColumn
             * @instance
             */
            LineAndColumn.prototype.column = 0;

            /**
             * Creates a new LineAndColumn instance using the specified properties.
             * @function create
             * @memberof bead.msg.LineAndColumn
             * @static
             * @param {bead.msg.ILineAndColumn=} [properties] Properties to set
             * @returns {bead.msg.LineAndColumn} LineAndColumn instance
             */
            LineAndColumn.create = function create(properties) {
                return new LineAndColumn(properties);
            };

            /**
             * Encodes the specified LineAndColumn message. Does not implicitly {@link bead.msg.LineAndColumn.verify|verify} messages.
             * @function encode
             * @memberof bead.msg.LineAndColumn
             * @static
             * @param {bead.msg.ILineAndColumn} message LineAndColumn message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LineAndColumn.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.line != null && Object.hasOwnProperty.call(message, "line"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.line);
                if (message.column != null && Object.hasOwnProperty.call(message, "column"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.column);
                return writer;
            };

            /**
             * Encodes the specified LineAndColumn message, length delimited. Does not implicitly {@link bead.msg.LineAndColumn.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bead.msg.LineAndColumn
             * @static
             * @param {bead.msg.ILineAndColumn} message LineAndColumn message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LineAndColumn.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LineAndColumn message from the specified reader or buffer.
             * @function decode
             * @memberof bead.msg.LineAndColumn
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bead.msg.LineAndColumn} LineAndColumn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LineAndColumn.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bead.msg.LineAndColumn();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.line = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.column = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LineAndColumn message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bead.msg.LineAndColumn
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bead.msg.LineAndColumn} LineAndColumn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LineAndColumn.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LineAndColumn message.
             * @function verify
             * @memberof bead.msg.LineAndColumn
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LineAndColumn.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.line != null && message.hasOwnProperty("line"))
                    if (!$util.isInteger(message.line))
                        return "line: integer expected";
                if (message.column != null && message.hasOwnProperty("column"))
                    if (!$util.isInteger(message.column))
                        return "column: integer expected";
                return null;
            };

            /**
             * Creates a LineAndColumn message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bead.msg.LineAndColumn
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bead.msg.LineAndColumn} LineAndColumn
             */
            LineAndColumn.fromObject = function fromObject(object) {
                if (object instanceof $root.bead.msg.LineAndColumn)
                    return object;
                var message = new $root.bead.msg.LineAndColumn();
                if (object.line != null)
                    message.line = object.line >>> 0;
                if (object.column != null)
                    message.column = object.column >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a LineAndColumn message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bead.msg.LineAndColumn
             * @static
             * @param {bead.msg.LineAndColumn} message LineAndColumn
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LineAndColumn.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.line = 0;
                    object.column = 0;
                }
                if (message.line != null && message.hasOwnProperty("line"))
                    object.line = message.line;
                if (message.column != null && message.hasOwnProperty("column"))
                    object.column = message.column;
                return object;
            };

            /**
             * Converts this LineAndColumn to JSON.
             * @function toJSON
             * @memberof bead.msg.LineAndColumn
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LineAndColumn.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for LineAndColumn
             * @function getTypeUrl
             * @memberof bead.msg.LineAndColumn
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            LineAndColumn.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bead.msg.LineAndColumn";
            };

            return LineAndColumn;
        })();

        msg.FileRange = (function() {

            /**
             * Properties of a FileRange.
             * @memberof bead.msg
             * @interface IFileRange
             * @property {bead.msg.ILineAndColumn|null} [start] FileRange start
             * @property {bead.msg.ILineAndColumn|null} [end] FileRange end
             */

            /**
             * Constructs a new FileRange.
             * @memberof bead.msg
             * @classdesc Represents a FileRange.
             * @implements IFileRange
             * @constructor
             * @param {bead.msg.IFileRange=} [properties] Properties to set
             */
            function FileRange(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileRange start.
             * @member {bead.msg.ILineAndColumn|null|undefined} start
             * @memberof bead.msg.FileRange
             * @instance
             */
            FileRange.prototype.start = null;

            /**
             * FileRange end.
             * @member {bead.msg.ILineAndColumn|null|undefined} end
             * @memberof bead.msg.FileRange
             * @instance
             */
            FileRange.prototype.end = null;

            /**
             * Creates a new FileRange instance using the specified properties.
             * @function create
             * @memberof bead.msg.FileRange
             * @static
             * @param {bead.msg.IFileRange=} [properties] Properties to set
             * @returns {bead.msg.FileRange} FileRange instance
             */
            FileRange.create = function create(properties) {
                return new FileRange(properties);
            };

            /**
             * Encodes the specified FileRange message. Does not implicitly {@link bead.msg.FileRange.verify|verify} messages.
             * @function encode
             * @memberof bead.msg.FileRange
             * @static
             * @param {bead.msg.IFileRange} message FileRange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileRange.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                    $root.bead.msg.LineAndColumn.encode(message.start, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                    $root.bead.msg.LineAndColumn.encode(message.end, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FileRange message, length delimited. Does not implicitly {@link bead.msg.FileRange.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bead.msg.FileRange
             * @static
             * @param {bead.msg.IFileRange} message FileRange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileRange.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileRange message from the specified reader or buffer.
             * @function decode
             * @memberof bead.msg.FileRange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bead.msg.FileRange} FileRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileRange.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bead.msg.FileRange();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.start = $root.bead.msg.LineAndColumn.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.end = $root.bead.msg.LineAndColumn.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileRange message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bead.msg.FileRange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bead.msg.FileRange} FileRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileRange.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileRange message.
             * @function verify
             * @memberof bead.msg.FileRange
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileRange.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.start != null && message.hasOwnProperty("start")) {
                    var error = $root.bead.msg.LineAndColumn.verify(message.start);
                    if (error)
                        return "start." + error;
                }
                if (message.end != null && message.hasOwnProperty("end")) {
                    var error = $root.bead.msg.LineAndColumn.verify(message.end);
                    if (error)
                        return "end." + error;
                }
                return null;
            };

            /**
             * Creates a FileRange message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bead.msg.FileRange
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bead.msg.FileRange} FileRange
             */
            FileRange.fromObject = function fromObject(object) {
                if (object instanceof $root.bead.msg.FileRange)
                    return object;
                var message = new $root.bead.msg.FileRange();
                if (object.start != null) {
                    if (typeof object.start !== "object")
                        throw TypeError(".bead.msg.FileRange.start: object expected");
                    message.start = $root.bead.msg.LineAndColumn.fromObject(object.start);
                }
                if (object.end != null) {
                    if (typeof object.end !== "object")
                        throw TypeError(".bead.msg.FileRange.end: object expected");
                    message.end = $root.bead.msg.LineAndColumn.fromObject(object.end);
                }
                return message;
            };

            /**
             * Creates a plain object from a FileRange message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bead.msg.FileRange
             * @static
             * @param {bead.msg.FileRange} message FileRange
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileRange.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.start = null;
                    object.end = null;
                }
                if (message.start != null && message.hasOwnProperty("start"))
                    object.start = $root.bead.msg.LineAndColumn.toObject(message.start, options);
                if (message.end != null && message.hasOwnProperty("end"))
                    object.end = $root.bead.msg.LineAndColumn.toObject(message.end, options);
                return object;
            };

            /**
             * Converts this FileRange to JSON.
             * @function toJSON
             * @memberof bead.msg.FileRange
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileRange.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FileRange
             * @function getTypeUrl
             * @memberof bead.msg.FileRange
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FileRange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bead.msg.FileRange";
            };

            return FileRange;
        })();

        msg.ReqFileEdit = (function() {

            /**
             * Properties of a ReqFileEdit.
             * @memberof bead.msg
             * @interface IReqFileEdit
             * @property {string|null} [filepath] ReqFileEdit filepath
             * @property {bead.msg.IFileRange|null} [range] ReqFileEdit range
             * @property {string|null} [newText] ReqFileEdit newText
             */

            /**
             * Constructs a new ReqFileEdit.
             * @memberof bead.msg
             * @classdesc Represents a ReqFileEdit.
             * @implements IReqFileEdit
             * @constructor
             * @param {bead.msg.IReqFileEdit=} [properties] Properties to set
             */
            function ReqFileEdit(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReqFileEdit filepath.
             * @member {string} filepath
             * @memberof bead.msg.ReqFileEdit
             * @instance
             */
            ReqFileEdit.prototype.filepath = "";

            /**
             * ReqFileEdit range.
             * @member {bead.msg.IFileRange|null|undefined} range
             * @memberof bead.msg.ReqFileEdit
             * @instance
             */
            ReqFileEdit.prototype.range = null;

            /**
             * ReqFileEdit newText.
             * @member {string} newText
             * @memberof bead.msg.ReqFileEdit
             * @instance
             */
            ReqFileEdit.prototype.newText = "";

            /**
             * Creates a new ReqFileEdit instance using the specified properties.
             * @function create
             * @memberof bead.msg.ReqFileEdit
             * @static
             * @param {bead.msg.IReqFileEdit=} [properties] Properties to set
             * @returns {bead.msg.ReqFileEdit} ReqFileEdit instance
             */
            ReqFileEdit.create = function create(properties) {
                return new ReqFileEdit(properties);
            };

            /**
             * Encodes the specified ReqFileEdit message. Does not implicitly {@link bead.msg.ReqFileEdit.verify|verify} messages.
             * @function encode
             * @memberof bead.msg.ReqFileEdit
             * @static
             * @param {bead.msg.IReqFileEdit} message ReqFileEdit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqFileEdit.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.filepath != null && Object.hasOwnProperty.call(message, "filepath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.filepath);
                if (message.range != null && Object.hasOwnProperty.call(message, "range"))
                    $root.bead.msg.FileRange.encode(message.range, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.newText != null && Object.hasOwnProperty.call(message, "newText"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.newText);
                return writer;
            };

            /**
             * Encodes the specified ReqFileEdit message, length delimited. Does not implicitly {@link bead.msg.ReqFileEdit.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bead.msg.ReqFileEdit
             * @static
             * @param {bead.msg.IReqFileEdit} message ReqFileEdit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqFileEdit.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReqFileEdit message from the specified reader or buffer.
             * @function decode
             * @memberof bead.msg.ReqFileEdit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bead.msg.ReqFileEdit} ReqFileEdit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqFileEdit.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bead.msg.ReqFileEdit();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.filepath = reader.string();
                            break;
                        }
                    case 2: {
                            message.range = $root.bead.msg.FileRange.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.newText = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ReqFileEdit message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bead.msg.ReqFileEdit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bead.msg.ReqFileEdit} ReqFileEdit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqFileEdit.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReqFileEdit message.
             * @function verify
             * @memberof bead.msg.ReqFileEdit
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReqFileEdit.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.filepath != null && message.hasOwnProperty("filepath"))
                    if (!$util.isString(message.filepath))
                        return "filepath: string expected";
                if (message.range != null && message.hasOwnProperty("range")) {
                    var error = $root.bead.msg.FileRange.verify(message.range);
                    if (error)
                        return "range." + error;
                }
                if (message.newText != null && message.hasOwnProperty("newText"))
                    if (!$util.isString(message.newText))
                        return "newText: string expected";
                return null;
            };

            /**
             * Creates a ReqFileEdit message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bead.msg.ReqFileEdit
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bead.msg.ReqFileEdit} ReqFileEdit
             */
            ReqFileEdit.fromObject = function fromObject(object) {
                if (object instanceof $root.bead.msg.ReqFileEdit)
                    return object;
                var message = new $root.bead.msg.ReqFileEdit();
                if (object.filepath != null)
                    message.filepath = String(object.filepath);
                if (object.range != null) {
                    if (typeof object.range !== "object")
                        throw TypeError(".bead.msg.ReqFileEdit.range: object expected");
                    message.range = $root.bead.msg.FileRange.fromObject(object.range);
                }
                if (object.newText != null)
                    message.newText = String(object.newText);
                return message;
            };

            /**
             * Creates a plain object from a ReqFileEdit message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bead.msg.ReqFileEdit
             * @static
             * @param {bead.msg.ReqFileEdit} message ReqFileEdit
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReqFileEdit.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.filepath = "";
                    object.range = null;
                    object.newText = "";
                }
                if (message.filepath != null && message.hasOwnProperty("filepath"))
                    object.filepath = message.filepath;
                if (message.range != null && message.hasOwnProperty("range"))
                    object.range = $root.bead.msg.FileRange.toObject(message.range, options);
                if (message.newText != null && message.hasOwnProperty("newText"))
                    object.newText = message.newText;
                return object;
            };

            /**
             * Converts this ReqFileEdit to JSON.
             * @function toJSON
             * @memberof bead.msg.ReqFileEdit
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReqFileEdit.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ReqFileEdit
             * @function getTypeUrl
             * @memberof bead.msg.ReqFileEdit
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ReqFileEdit.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bead.msg.ReqFileEdit";
            };

            return ReqFileEdit;
        })();

        msg.ResFileEdit = (function() {

            /**
             * Properties of a ResFileEdit.
             * @memberof bead.msg
             * @interface IResFileEdit
             * @property {bead.msg.ResFileEdit.ErrorTypeT|null} [errorType] ResFileEdit errorType
             */

            /**
             * Constructs a new ResFileEdit.
             * @memberof bead.msg
             * @classdesc Represents a ResFileEdit.
             * @implements IResFileEdit
             * @constructor
             * @param {bead.msg.IResFileEdit=} [properties] Properties to set
             */
            function ResFileEdit(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResFileEdit errorType.
             * @member {bead.msg.ResFileEdit.ErrorTypeT} errorType
             * @memberof bead.msg.ResFileEdit
             * @instance
             */
            ResFileEdit.prototype.errorType = 0;

            /**
             * Creates a new ResFileEdit instance using the specified properties.
             * @function create
             * @memberof bead.msg.ResFileEdit
             * @static
             * @param {bead.msg.IResFileEdit=} [properties] Properties to set
             * @returns {bead.msg.ResFileEdit} ResFileEdit instance
             */
            ResFileEdit.create = function create(properties) {
                return new ResFileEdit(properties);
            };

            /**
             * Encodes the specified ResFileEdit message. Does not implicitly {@link bead.msg.ResFileEdit.verify|verify} messages.
             * @function encode
             * @memberof bead.msg.ResFileEdit
             * @static
             * @param {bead.msg.IResFileEdit} message ResFileEdit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResFileEdit.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.errorType != null && Object.hasOwnProperty.call(message, "errorType"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errorType);
                return writer;
            };

            /**
             * Encodes the specified ResFileEdit message, length delimited. Does not implicitly {@link bead.msg.ResFileEdit.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bead.msg.ResFileEdit
             * @static
             * @param {bead.msg.IResFileEdit} message ResFileEdit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResFileEdit.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResFileEdit message from the specified reader or buffer.
             * @function decode
             * @memberof bead.msg.ResFileEdit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bead.msg.ResFileEdit} ResFileEdit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResFileEdit.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bead.msg.ResFileEdit();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.errorType = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResFileEdit message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bead.msg.ResFileEdit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bead.msg.ResFileEdit} ResFileEdit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResFileEdit.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResFileEdit message.
             * @function verify
             * @memberof bead.msg.ResFileEdit
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResFileEdit.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.errorType != null && message.hasOwnProperty("errorType"))
                    switch (message.errorType) {
                    default:
                        return "errorType: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                return null;
            };

            /**
             * Creates a ResFileEdit message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bead.msg.ResFileEdit
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bead.msg.ResFileEdit} ResFileEdit
             */
            ResFileEdit.fromObject = function fromObject(object) {
                if (object instanceof $root.bead.msg.ResFileEdit)
                    return object;
                var message = new $root.bead.msg.ResFileEdit();
                switch (object.errorType) {
                default:
                    if (typeof object.errorType === "number") {
                        message.errorType = object.errorType;
                        break;
                    }
                    break;
                case "Success":
                case 0:
                    message.errorType = 0;
                    break;
                case "Fail":
                case 1:
                    message.errorType = 1;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a ResFileEdit message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bead.msg.ResFileEdit
             * @static
             * @param {bead.msg.ResFileEdit} message ResFileEdit
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResFileEdit.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.errorType = options.enums === String ? "Success" : 0;
                if (message.errorType != null && message.hasOwnProperty("errorType"))
                    object.errorType = options.enums === String ? $root.bead.msg.ResFileEdit.ErrorTypeT[message.errorType] === undefined ? message.errorType : $root.bead.msg.ResFileEdit.ErrorTypeT[message.errorType] : message.errorType;
                return object;
            };

            /**
             * Converts this ResFileEdit to JSON.
             * @function toJSON
             * @memberof bead.msg.ResFileEdit
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResFileEdit.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ResFileEdit
             * @function getTypeUrl
             * @memberof bead.msg.ResFileEdit
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ResFileEdit.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bead.msg.ResFileEdit";
            };

            /**
             * ErrorTypeT enum.
             * @name bead.msg.ResFileEdit.ErrorTypeT
             * @enum {number}
             * @property {number} Success=0 Success value
             * @property {number} Fail=1 Fail value
             */
            ResFileEdit.ErrorTypeT = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "Success"] = 0;
                values[valuesById[1] = "Fail"] = 1;
                return values;
            })();

            return ResFileEdit;
        })();

        msg.ReqInitProject = (function() {

            /**
             * Properties of a ReqInitProject.
             * @memberof bead.msg
             * @interface IReqInitProject
             * @property {string|null} [projectName] ReqInitProject projectName
             * @property {string|null} [projectPath] ReqInitProject projectPath
             */

            /**
             * Constructs a new ReqInitProject.
             * @memberof bead.msg
             * @classdesc Represents a ReqInitProject.
             * @implements IReqInitProject
             * @constructor
             * @param {bead.msg.IReqInitProject=} [properties] Properties to set
             */
            function ReqInitProject(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReqInitProject projectName.
             * @member {string} projectName
             * @memberof bead.msg.ReqInitProject
             * @instance
             */
            ReqInitProject.prototype.projectName = "";

            /**
             * ReqInitProject projectPath.
             * @member {string} projectPath
             * @memberof bead.msg.ReqInitProject
             * @instance
             */
            ReqInitProject.prototype.projectPath = "";

            /**
             * Creates a new ReqInitProject instance using the specified properties.
             * @function create
             * @memberof bead.msg.ReqInitProject
             * @static
             * @param {bead.msg.IReqInitProject=} [properties] Properties to set
             * @returns {bead.msg.ReqInitProject} ReqInitProject instance
             */
            ReqInitProject.create = function create(properties) {
                return new ReqInitProject(properties);
            };

            /**
             * Encodes the specified ReqInitProject message. Does not implicitly {@link bead.msg.ReqInitProject.verify|verify} messages.
             * @function encode
             * @memberof bead.msg.ReqInitProject
             * @static
             * @param {bead.msg.IReqInitProject} message ReqInitProject message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqInitProject.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.projectName != null && Object.hasOwnProperty.call(message, "projectName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.projectName);
                if (message.projectPath != null && Object.hasOwnProperty.call(message, "projectPath"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.projectPath);
                return writer;
            };

            /**
             * Encodes the specified ReqInitProject message, length delimited. Does not implicitly {@link bead.msg.ReqInitProject.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bead.msg.ReqInitProject
             * @static
             * @param {bead.msg.IReqInitProject} message ReqInitProject message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqInitProject.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReqInitProject message from the specified reader or buffer.
             * @function decode
             * @memberof bead.msg.ReqInitProject
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bead.msg.ReqInitProject} ReqInitProject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqInitProject.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bead.msg.ReqInitProject();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.projectName = reader.string();
                            break;
                        }
                    case 2: {
                            message.projectPath = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ReqInitProject message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bead.msg.ReqInitProject
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bead.msg.ReqInitProject} ReqInitProject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqInitProject.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReqInitProject message.
             * @function verify
             * @memberof bead.msg.ReqInitProject
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReqInitProject.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.projectName != null && message.hasOwnProperty("projectName"))
                    if (!$util.isString(message.projectName))
                        return "projectName: string expected";
                if (message.projectPath != null && message.hasOwnProperty("projectPath"))
                    if (!$util.isString(message.projectPath))
                        return "projectPath: string expected";
                return null;
            };

            /**
             * Creates a ReqInitProject message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bead.msg.ReqInitProject
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bead.msg.ReqInitProject} ReqInitProject
             */
            ReqInitProject.fromObject = function fromObject(object) {
                if (object instanceof $root.bead.msg.ReqInitProject)
                    return object;
                var message = new $root.bead.msg.ReqInitProject();
                if (object.projectName != null)
                    message.projectName = String(object.projectName);
                if (object.projectPath != null)
                    message.projectPath = String(object.projectPath);
                return message;
            };

            /**
             * Creates a plain object from a ReqInitProject message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bead.msg.ReqInitProject
             * @static
             * @param {bead.msg.ReqInitProject} message ReqInitProject
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReqInitProject.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.projectName = "";
                    object.projectPath = "";
                }
                if (message.projectName != null && message.hasOwnProperty("projectName"))
                    object.projectName = message.projectName;
                if (message.projectPath != null && message.hasOwnProperty("projectPath"))
                    object.projectPath = message.projectPath;
                return object;
            };

            /**
             * Converts this ReqInitProject to JSON.
             * @function toJSON
             * @memberof bead.msg.ReqInitProject
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReqInitProject.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ReqInitProject
             * @function getTypeUrl
             * @memberof bead.msg.ReqInitProject
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ReqInitProject.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bead.msg.ReqInitProject";
            };

            return ReqInitProject;
        })();

        msg.ResInitProject = (function() {

            /**
             * Properties of a ResInitProject.
             * @memberof bead.msg
             * @interface IResInitProject
             * @property {boolean|null} [finish] ResInitProject finish
             * @property {boolean|null} [success] ResInitProject success
             */

            /**
             * Constructs a new ResInitProject.
             * @memberof bead.msg
             * @classdesc Represents a ResInitProject.
             * @implements IResInitProject
             * @constructor
             * @param {bead.msg.IResInitProject=} [properties] Properties to set
             */
            function ResInitProject(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResInitProject finish.
             * @member {boolean} finish
             * @memberof bead.msg.ResInitProject
             * @instance
             */
            ResInitProject.prototype.finish = false;

            /**
             * ResInitProject success.
             * @member {boolean} success
             * @memberof bead.msg.ResInitProject
             * @instance
             */
            ResInitProject.prototype.success = false;

            /**
             * Creates a new ResInitProject instance using the specified properties.
             * @function create
             * @memberof bead.msg.ResInitProject
             * @static
             * @param {bead.msg.IResInitProject=} [properties] Properties to set
             * @returns {bead.msg.ResInitProject} ResInitProject instance
             */
            ResInitProject.create = function create(properties) {
                return new ResInitProject(properties);
            };

            /**
             * Encodes the specified ResInitProject message. Does not implicitly {@link bead.msg.ResInitProject.verify|verify} messages.
             * @function encode
             * @memberof bead.msg.ResInitProject
             * @static
             * @param {bead.msg.IResInitProject} message ResInitProject message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResInitProject.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.finish != null && Object.hasOwnProperty.call(message, "finish"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.finish);
                if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.success);
                return writer;
            };

            /**
             * Encodes the specified ResInitProject message, length delimited. Does not implicitly {@link bead.msg.ResInitProject.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bead.msg.ResInitProject
             * @static
             * @param {bead.msg.IResInitProject} message ResInitProject message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResInitProject.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResInitProject message from the specified reader or buffer.
             * @function decode
             * @memberof bead.msg.ResInitProject
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bead.msg.ResInitProject} ResInitProject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResInitProject.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bead.msg.ResInitProject();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.finish = reader.bool();
                            break;
                        }
                    case 2: {
                            message.success = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResInitProject message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bead.msg.ResInitProject
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bead.msg.ResInitProject} ResInitProject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResInitProject.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResInitProject message.
             * @function verify
             * @memberof bead.msg.ResInitProject
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResInitProject.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.finish != null && message.hasOwnProperty("finish"))
                    if (typeof message.finish !== "boolean")
                        return "finish: boolean expected";
                if (message.success != null && message.hasOwnProperty("success"))
                    if (typeof message.success !== "boolean")
                        return "success: boolean expected";
                return null;
            };

            /**
             * Creates a ResInitProject message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bead.msg.ResInitProject
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bead.msg.ResInitProject} ResInitProject
             */
            ResInitProject.fromObject = function fromObject(object) {
                if (object instanceof $root.bead.msg.ResInitProject)
                    return object;
                var message = new $root.bead.msg.ResInitProject();
                if (object.finish != null)
                    message.finish = Boolean(object.finish);
                if (object.success != null)
                    message.success = Boolean(object.success);
                return message;
            };

            /**
             * Creates a plain object from a ResInitProject message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bead.msg.ResInitProject
             * @static
             * @param {bead.msg.ResInitProject} message ResInitProject
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResInitProject.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.finish = false;
                    object.success = false;
                }
                if (message.finish != null && message.hasOwnProperty("finish"))
                    object.finish = message.finish;
                if (message.success != null && message.hasOwnProperty("success"))
                    object.success = message.success;
                return object;
            };

            /**
             * Converts this ResInitProject to JSON.
             * @function toJSON
             * @memberof bead.msg.ResInitProject
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResInitProject.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ResInitProject
             * @function getTypeUrl
             * @memberof bead.msg.ResInitProject
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ResInitProject.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bead.msg.ResInitProject";
            };

            return ResInitProject;
        })();

        msg.ReqOpenFile = (function() {

            /**
             * Properties of a ReqOpenFile.
             * @memberof bead.msg
             * @interface IReqOpenFile
             * @property {string|null} [filepath] ReqOpenFile filepath
             */

            /**
             * Constructs a new ReqOpenFile.
             * @memberof bead.msg
             * @classdesc Represents a ReqOpenFile.
             * @implements IReqOpenFile
             * @constructor
             * @param {bead.msg.IReqOpenFile=} [properties] Properties to set
             */
            function ReqOpenFile(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReqOpenFile filepath.
             * @member {string} filepath
             * @memberof bead.msg.ReqOpenFile
             * @instance
             */
            ReqOpenFile.prototype.filepath = "";

            /**
             * Creates a new ReqOpenFile instance using the specified properties.
             * @function create
             * @memberof bead.msg.ReqOpenFile
             * @static
             * @param {bead.msg.IReqOpenFile=} [properties] Properties to set
             * @returns {bead.msg.ReqOpenFile} ReqOpenFile instance
             */
            ReqOpenFile.create = function create(properties) {
                return new ReqOpenFile(properties);
            };

            /**
             * Encodes the specified ReqOpenFile message. Does not implicitly {@link bead.msg.ReqOpenFile.verify|verify} messages.
             * @function encode
             * @memberof bead.msg.ReqOpenFile
             * @static
             * @param {bead.msg.IReqOpenFile} message ReqOpenFile message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqOpenFile.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.filepath != null && Object.hasOwnProperty.call(message, "filepath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.filepath);
                return writer;
            };

            /**
             * Encodes the specified ReqOpenFile message, length delimited. Does not implicitly {@link bead.msg.ReqOpenFile.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bead.msg.ReqOpenFile
             * @static
             * @param {bead.msg.IReqOpenFile} message ReqOpenFile message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqOpenFile.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReqOpenFile message from the specified reader or buffer.
             * @function decode
             * @memberof bead.msg.ReqOpenFile
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bead.msg.ReqOpenFile} ReqOpenFile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqOpenFile.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bead.msg.ReqOpenFile();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.filepath = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ReqOpenFile message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bead.msg.ReqOpenFile
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bead.msg.ReqOpenFile} ReqOpenFile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqOpenFile.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReqOpenFile message.
             * @function verify
             * @memberof bead.msg.ReqOpenFile
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReqOpenFile.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.filepath != null && message.hasOwnProperty("filepath"))
                    if (!$util.isString(message.filepath))
                        return "filepath: string expected";
                return null;
            };

            /**
             * Creates a ReqOpenFile message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bead.msg.ReqOpenFile
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bead.msg.ReqOpenFile} ReqOpenFile
             */
            ReqOpenFile.fromObject = function fromObject(object) {
                if (object instanceof $root.bead.msg.ReqOpenFile)
                    return object;
                var message = new $root.bead.msg.ReqOpenFile();
                if (object.filepath != null)
                    message.filepath = String(object.filepath);
                return message;
            };

            /**
             * Creates a plain object from a ReqOpenFile message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bead.msg.ReqOpenFile
             * @static
             * @param {bead.msg.ReqOpenFile} message ReqOpenFile
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReqOpenFile.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.filepath = "";
                if (message.filepath != null && message.hasOwnProperty("filepath"))
                    object.filepath = message.filepath;
                return object;
            };

            /**
             * Converts this ReqOpenFile to JSON.
             * @function toJSON
             * @memberof bead.msg.ReqOpenFile
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReqOpenFile.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ReqOpenFile
             * @function getTypeUrl
             * @memberof bead.msg.ReqOpenFile
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ReqOpenFile.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bead.msg.ReqOpenFile";
            };

            return ReqOpenFile;
        })();

        msg.ResOpenFile = (function() {

            /**
             * Properties of a ResOpenFile.
             * @memberof bead.msg
             * @interface IResOpenFile
             * @property {bead.msg.ResOpenFile.ErrorTypeT|null} [errorType] ResOpenFile errorType
             */

            /**
             * Constructs a new ResOpenFile.
             * @memberof bead.msg
             * @classdesc Represents a ResOpenFile.
             * @implements IResOpenFile
             * @constructor
             * @param {bead.msg.IResOpenFile=} [properties] Properties to set
             */
            function ResOpenFile(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResOpenFile errorType.
             * @member {bead.msg.ResOpenFile.ErrorTypeT} errorType
             * @memberof bead.msg.ResOpenFile
             * @instance
             */
            ResOpenFile.prototype.errorType = 0;

            /**
             * Creates a new ResOpenFile instance using the specified properties.
             * @function create
             * @memberof bead.msg.ResOpenFile
             * @static
             * @param {bead.msg.IResOpenFile=} [properties] Properties to set
             * @returns {bead.msg.ResOpenFile} ResOpenFile instance
             */
            ResOpenFile.create = function create(properties) {
                return new ResOpenFile(properties);
            };

            /**
             * Encodes the specified ResOpenFile message. Does not implicitly {@link bead.msg.ResOpenFile.verify|verify} messages.
             * @function encode
             * @memberof bead.msg.ResOpenFile
             * @static
             * @param {bead.msg.IResOpenFile} message ResOpenFile message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResOpenFile.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.errorType != null && Object.hasOwnProperty.call(message, "errorType"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errorType);
                return writer;
            };

            /**
             * Encodes the specified ResOpenFile message, length delimited. Does not implicitly {@link bead.msg.ResOpenFile.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bead.msg.ResOpenFile
             * @static
             * @param {bead.msg.IResOpenFile} message ResOpenFile message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResOpenFile.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResOpenFile message from the specified reader or buffer.
             * @function decode
             * @memberof bead.msg.ResOpenFile
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bead.msg.ResOpenFile} ResOpenFile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResOpenFile.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bead.msg.ResOpenFile();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.errorType = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResOpenFile message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bead.msg.ResOpenFile
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bead.msg.ResOpenFile} ResOpenFile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResOpenFile.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResOpenFile message.
             * @function verify
             * @memberof bead.msg.ResOpenFile
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResOpenFile.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.errorType != null && message.hasOwnProperty("errorType"))
                    switch (message.errorType) {
                    default:
                        return "errorType: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                return null;
            };

            /**
             * Creates a ResOpenFile message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bead.msg.ResOpenFile
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bead.msg.ResOpenFile} ResOpenFile
             */
            ResOpenFile.fromObject = function fromObject(object) {
                if (object instanceof $root.bead.msg.ResOpenFile)
                    return object;
                var message = new $root.bead.msg.ResOpenFile();
                switch (object.errorType) {
                default:
                    if (typeof object.errorType === "number") {
                        message.errorType = object.errorType;
                        break;
                    }
                    break;
                case "Success":
                case 0:
                    message.errorType = 0;
                    break;
                case "Fail":
                case 1:
                    message.errorType = 1;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a ResOpenFile message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bead.msg.ResOpenFile
             * @static
             * @param {bead.msg.ResOpenFile} message ResOpenFile
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResOpenFile.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.errorType = options.enums === String ? "Success" : 0;
                if (message.errorType != null && message.hasOwnProperty("errorType"))
                    object.errorType = options.enums === String ? $root.bead.msg.ResOpenFile.ErrorTypeT[message.errorType] === undefined ? message.errorType : $root.bead.msg.ResOpenFile.ErrorTypeT[message.errorType] : message.errorType;
                return object;
            };

            /**
             * Converts this ResOpenFile to JSON.
             * @function toJSON
             * @memberof bead.msg.ResOpenFile
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResOpenFile.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ResOpenFile
             * @function getTypeUrl
             * @memberof bead.msg.ResOpenFile
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ResOpenFile.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bead.msg.ResOpenFile";
            };

            /**
             * ErrorTypeT enum.
             * @name bead.msg.ResOpenFile.ErrorTypeT
             * @enum {number}
             * @property {number} Success=0 Success value
             * @property {number} Fail=1 Fail value
             */
            ResOpenFile.ErrorTypeT = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "Success"] = 0;
                values[valuesById[1] = "Fail"] = 1;
                return values;
            })();

            return ResOpenFile;
        })();

        msg.ReqChangeConfig = (function() {

            /**
             * Properties of a ReqChangeConfig.
             * @memberof bead.msg
             * @interface IReqChangeConfig
             * @property {string|null} [topicPrompt] ReqChangeConfig topicPrompt
             * @property {number|null} [functionReferenceCount] ReqChangeConfig functionReferenceCount
             */

            /**
             * Constructs a new ReqChangeConfig.
             * @memberof bead.msg
             * @classdesc Represents a ReqChangeConfig.
             * @implements IReqChangeConfig
             * @constructor
             * @param {bead.msg.IReqChangeConfig=} [properties] Properties to set
             */
            function ReqChangeConfig(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReqChangeConfig topicPrompt.
             * @member {string} topicPrompt
             * @memberof bead.msg.ReqChangeConfig
             * @instance
             */
            ReqChangeConfig.prototype.topicPrompt = "";

            /**
             * ReqChangeConfig functionReferenceCount.
             * @member {number} functionReferenceCount
             * @memberof bead.msg.ReqChangeConfig
             * @instance
             */
            ReqChangeConfig.prototype.functionReferenceCount = 0;

            /**
             * Creates a new ReqChangeConfig instance using the specified properties.
             * @function create
             * @memberof bead.msg.ReqChangeConfig
             * @static
             * @param {bead.msg.IReqChangeConfig=} [properties] Properties to set
             * @returns {bead.msg.ReqChangeConfig} ReqChangeConfig instance
             */
            ReqChangeConfig.create = function create(properties) {
                return new ReqChangeConfig(properties);
            };

            /**
             * Encodes the specified ReqChangeConfig message. Does not implicitly {@link bead.msg.ReqChangeConfig.verify|verify} messages.
             * @function encode
             * @memberof bead.msg.ReqChangeConfig
             * @static
             * @param {bead.msg.IReqChangeConfig} message ReqChangeConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqChangeConfig.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.topicPrompt != null && Object.hasOwnProperty.call(message, "topicPrompt"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.topicPrompt);
                if (message.functionReferenceCount != null && Object.hasOwnProperty.call(message, "functionReferenceCount"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.functionReferenceCount);
                return writer;
            };

            /**
             * Encodes the specified ReqChangeConfig message, length delimited. Does not implicitly {@link bead.msg.ReqChangeConfig.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bead.msg.ReqChangeConfig
             * @static
             * @param {bead.msg.IReqChangeConfig} message ReqChangeConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqChangeConfig.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReqChangeConfig message from the specified reader or buffer.
             * @function decode
             * @memberof bead.msg.ReqChangeConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bead.msg.ReqChangeConfig} ReqChangeConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqChangeConfig.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bead.msg.ReqChangeConfig();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.topicPrompt = reader.string();
                            break;
                        }
                    case 2: {
                            message.functionReferenceCount = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ReqChangeConfig message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bead.msg.ReqChangeConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bead.msg.ReqChangeConfig} ReqChangeConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqChangeConfig.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReqChangeConfig message.
             * @function verify
             * @memberof bead.msg.ReqChangeConfig
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReqChangeConfig.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.topicPrompt != null && message.hasOwnProperty("topicPrompt"))
                    if (!$util.isString(message.topicPrompt))
                        return "topicPrompt: string expected";
                if (message.functionReferenceCount != null && message.hasOwnProperty("functionReferenceCount"))
                    if (!$util.isInteger(message.functionReferenceCount))
                        return "functionReferenceCount: integer expected";
                return null;
            };

            /**
             * Creates a ReqChangeConfig message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bead.msg.ReqChangeConfig
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bead.msg.ReqChangeConfig} ReqChangeConfig
             */
            ReqChangeConfig.fromObject = function fromObject(object) {
                if (object instanceof $root.bead.msg.ReqChangeConfig)
                    return object;
                var message = new $root.bead.msg.ReqChangeConfig();
                if (object.topicPrompt != null)
                    message.topicPrompt = String(object.topicPrompt);
                if (object.functionReferenceCount != null)
                    message.functionReferenceCount = object.functionReferenceCount | 0;
                return message;
            };

            /**
             * Creates a plain object from a ReqChangeConfig message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bead.msg.ReqChangeConfig
             * @static
             * @param {bead.msg.ReqChangeConfig} message ReqChangeConfig
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReqChangeConfig.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.topicPrompt = "";
                    object.functionReferenceCount = 0;
                }
                if (message.topicPrompt != null && message.hasOwnProperty("topicPrompt"))
                    object.topicPrompt = message.topicPrompt;
                if (message.functionReferenceCount != null && message.hasOwnProperty("functionReferenceCount"))
                    object.functionReferenceCount = message.functionReferenceCount;
                return object;
            };

            /**
             * Converts this ReqChangeConfig to JSON.
             * @function toJSON
             * @memberof bead.msg.ReqChangeConfig
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReqChangeConfig.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ReqChangeConfig
             * @function getTypeUrl
             * @memberof bead.msg.ReqChangeConfig
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ReqChangeConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bead.msg.ReqChangeConfig";
            };

            return ReqChangeConfig;
        })();

        msg.ResChangeConfig = (function() {

            /**
             * Properties of a ResChangeConfig.
             * @memberof bead.msg
             * @interface IResChangeConfig
             * @property {bead.msg.ResChangeConfig.ErrorTypeT|null} [errorType] ResChangeConfig errorType
             */

            /**
             * Constructs a new ResChangeConfig.
             * @memberof bead.msg
             * @classdesc Represents a ResChangeConfig.
             * @implements IResChangeConfig
             * @constructor
             * @param {bead.msg.IResChangeConfig=} [properties] Properties to set
             */
            function ResChangeConfig(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResChangeConfig errorType.
             * @member {bead.msg.ResChangeConfig.ErrorTypeT} errorType
             * @memberof bead.msg.ResChangeConfig
             * @instance
             */
            ResChangeConfig.prototype.errorType = 0;

            /**
             * Creates a new ResChangeConfig instance using the specified properties.
             * @function create
             * @memberof bead.msg.ResChangeConfig
             * @static
             * @param {bead.msg.IResChangeConfig=} [properties] Properties to set
             * @returns {bead.msg.ResChangeConfig} ResChangeConfig instance
             */
            ResChangeConfig.create = function create(properties) {
                return new ResChangeConfig(properties);
            };

            /**
             * Encodes the specified ResChangeConfig message. Does not implicitly {@link bead.msg.ResChangeConfig.verify|verify} messages.
             * @function encode
             * @memberof bead.msg.ResChangeConfig
             * @static
             * @param {bead.msg.IResChangeConfig} message ResChangeConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResChangeConfig.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.errorType != null && Object.hasOwnProperty.call(message, "errorType"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errorType);
                return writer;
            };

            /**
             * Encodes the specified ResChangeConfig message, length delimited. Does not implicitly {@link bead.msg.ResChangeConfig.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bead.msg.ResChangeConfig
             * @static
             * @param {bead.msg.IResChangeConfig} message ResChangeConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResChangeConfig.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResChangeConfig message from the specified reader or buffer.
             * @function decode
             * @memberof bead.msg.ResChangeConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bead.msg.ResChangeConfig} ResChangeConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResChangeConfig.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bead.msg.ResChangeConfig();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.errorType = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResChangeConfig message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bead.msg.ResChangeConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bead.msg.ResChangeConfig} ResChangeConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResChangeConfig.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResChangeConfig message.
             * @function verify
             * @memberof bead.msg.ResChangeConfig
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResChangeConfig.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.errorType != null && message.hasOwnProperty("errorType"))
                    switch (message.errorType) {
                    default:
                        return "errorType: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                return null;
            };

            /**
             * Creates a ResChangeConfig message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bead.msg.ResChangeConfig
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bead.msg.ResChangeConfig} ResChangeConfig
             */
            ResChangeConfig.fromObject = function fromObject(object) {
                if (object instanceof $root.bead.msg.ResChangeConfig)
                    return object;
                var message = new $root.bead.msg.ResChangeConfig();
                switch (object.errorType) {
                default:
                    if (typeof object.errorType === "number") {
                        message.errorType = object.errorType;
                        break;
                    }
                    break;
                case "Success":
                case 0:
                    message.errorType = 0;
                    break;
                case "Fail":
                case 1:
                    message.errorType = 1;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a ResChangeConfig message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bead.msg.ResChangeConfig
             * @static
             * @param {bead.msg.ResChangeConfig} message ResChangeConfig
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResChangeConfig.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.errorType = options.enums === String ? "Success" : 0;
                if (message.errorType != null && message.hasOwnProperty("errorType"))
                    object.errorType = options.enums === String ? $root.bead.msg.ResChangeConfig.ErrorTypeT[message.errorType] === undefined ? message.errorType : $root.bead.msg.ResChangeConfig.ErrorTypeT[message.errorType] : message.errorType;
                return object;
            };

            /**
             * Converts this ResChangeConfig to JSON.
             * @function toJSON
             * @memberof bead.msg.ResChangeConfig
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResChangeConfig.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ResChangeConfig
             * @function getTypeUrl
             * @memberof bead.msg.ResChangeConfig
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ResChangeConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bead.msg.ResChangeConfig";
            };

            /**
             * ErrorTypeT enum.
             * @name bead.msg.ResChangeConfig.ErrorTypeT
             * @enum {number}
             * @property {number} Success=0 Success value
             * @property {number} Fail=1 Fail value
             */
            ResChangeConfig.ErrorTypeT = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "Success"] = 0;
                values[valuesById[1] = "Fail"] = 1;
                return values;
            })();

            return ResChangeConfig;
        })();

        msg.ReqFileDelete = (function() {

            /**
             * Properties of a ReqFileDelete.
             * @memberof bead.msg
             * @interface IReqFileDelete
             * @property {string|null} [filepath] ReqFileDelete filepath
             */

            /**
             * Constructs a new ReqFileDelete.
             * @memberof bead.msg
             * @classdesc Represents a ReqFileDelete.
             * @implements IReqFileDelete
             * @constructor
             * @param {bead.msg.IReqFileDelete=} [properties] Properties to set
             */
            function ReqFileDelete(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReqFileDelete filepath.
             * @member {string} filepath
             * @memberof bead.msg.ReqFileDelete
             * @instance
             */
            ReqFileDelete.prototype.filepath = "";

            /**
             * Creates a new ReqFileDelete instance using the specified properties.
             * @function create
             * @memberof bead.msg.ReqFileDelete
             * @static
             * @param {bead.msg.IReqFileDelete=} [properties] Properties to set
             * @returns {bead.msg.ReqFileDelete} ReqFileDelete instance
             */
            ReqFileDelete.create = function create(properties) {
                return new ReqFileDelete(properties);
            };

            /**
             * Encodes the specified ReqFileDelete message. Does not implicitly {@link bead.msg.ReqFileDelete.verify|verify} messages.
             * @function encode
             * @memberof bead.msg.ReqFileDelete
             * @static
             * @param {bead.msg.IReqFileDelete} message ReqFileDelete message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqFileDelete.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.filepath != null && Object.hasOwnProperty.call(message, "filepath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.filepath);
                return writer;
            };

            /**
             * Encodes the specified ReqFileDelete message, length delimited. Does not implicitly {@link bead.msg.ReqFileDelete.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bead.msg.ReqFileDelete
             * @static
             * @param {bead.msg.IReqFileDelete} message ReqFileDelete message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqFileDelete.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReqFileDelete message from the specified reader or buffer.
             * @function decode
             * @memberof bead.msg.ReqFileDelete
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bead.msg.ReqFileDelete} ReqFileDelete
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqFileDelete.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bead.msg.ReqFileDelete();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.filepath = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ReqFileDelete message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bead.msg.ReqFileDelete
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bead.msg.ReqFileDelete} ReqFileDelete
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqFileDelete.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReqFileDelete message.
             * @function verify
             * @memberof bead.msg.ReqFileDelete
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReqFileDelete.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.filepath != null && message.hasOwnProperty("filepath"))
                    if (!$util.isString(message.filepath))
                        return "filepath: string expected";
                return null;
            };

            /**
             * Creates a ReqFileDelete message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bead.msg.ReqFileDelete
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bead.msg.ReqFileDelete} ReqFileDelete
             */
            ReqFileDelete.fromObject = function fromObject(object) {
                if (object instanceof $root.bead.msg.ReqFileDelete)
                    return object;
                var message = new $root.bead.msg.ReqFileDelete();
                if (object.filepath != null)
                    message.filepath = String(object.filepath);
                return message;
            };

            /**
             * Creates a plain object from a ReqFileDelete message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bead.msg.ReqFileDelete
             * @static
             * @param {bead.msg.ReqFileDelete} message ReqFileDelete
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReqFileDelete.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.filepath = "";
                if (message.filepath != null && message.hasOwnProperty("filepath"))
                    object.filepath = message.filepath;
                return object;
            };

            /**
             * Converts this ReqFileDelete to JSON.
             * @function toJSON
             * @memberof bead.msg.ReqFileDelete
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReqFileDelete.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ReqFileDelete
             * @function getTypeUrl
             * @memberof bead.msg.ReqFileDelete
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ReqFileDelete.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bead.msg.ReqFileDelete";
            };

            return ReqFileDelete;
        })();

        msg.ResFileDelete = (function() {

            /**
             * Properties of a ResFileDelete.
             * @memberof bead.msg
             * @interface IResFileDelete
             * @property {boolean|null} [success] ResFileDelete success
             */

            /**
             * Constructs a new ResFileDelete.
             * @memberof bead.msg
             * @classdesc Represents a ResFileDelete.
             * @implements IResFileDelete
             * @constructor
             * @param {bead.msg.IResFileDelete=} [properties] Properties to set
             */
            function ResFileDelete(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResFileDelete success.
             * @member {boolean} success
             * @memberof bead.msg.ResFileDelete
             * @instance
             */
            ResFileDelete.prototype.success = false;

            /**
             * Creates a new ResFileDelete instance using the specified properties.
             * @function create
             * @memberof bead.msg.ResFileDelete
             * @static
             * @param {bead.msg.IResFileDelete=} [properties] Properties to set
             * @returns {bead.msg.ResFileDelete} ResFileDelete instance
             */
            ResFileDelete.create = function create(properties) {
                return new ResFileDelete(properties);
            };

            /**
             * Encodes the specified ResFileDelete message. Does not implicitly {@link bead.msg.ResFileDelete.verify|verify} messages.
             * @function encode
             * @memberof bead.msg.ResFileDelete
             * @static
             * @param {bead.msg.IResFileDelete} message ResFileDelete message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResFileDelete.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
                return writer;
            };

            /**
             * Encodes the specified ResFileDelete message, length delimited. Does not implicitly {@link bead.msg.ResFileDelete.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bead.msg.ResFileDelete
             * @static
             * @param {bead.msg.IResFileDelete} message ResFileDelete message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResFileDelete.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResFileDelete message from the specified reader or buffer.
             * @function decode
             * @memberof bead.msg.ResFileDelete
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bead.msg.ResFileDelete} ResFileDelete
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResFileDelete.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bead.msg.ResFileDelete();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.success = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResFileDelete message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bead.msg.ResFileDelete
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bead.msg.ResFileDelete} ResFileDelete
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResFileDelete.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResFileDelete message.
             * @function verify
             * @memberof bead.msg.ResFileDelete
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResFileDelete.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.success != null && message.hasOwnProperty("success"))
                    if (typeof message.success !== "boolean")
                        return "success: boolean expected";
                return null;
            };

            /**
             * Creates a ResFileDelete message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bead.msg.ResFileDelete
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bead.msg.ResFileDelete} ResFileDelete
             */
            ResFileDelete.fromObject = function fromObject(object) {
                if (object instanceof $root.bead.msg.ResFileDelete)
                    return object;
                var message = new $root.bead.msg.ResFileDelete();
                if (object.success != null)
                    message.success = Boolean(object.success);
                return message;
            };

            /**
             * Creates a plain object from a ResFileDelete message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bead.msg.ResFileDelete
             * @static
             * @param {bead.msg.ResFileDelete} message ResFileDelete
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResFileDelete.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.success = false;
                if (message.success != null && message.hasOwnProperty("success"))
                    object.success = message.success;
                return object;
            };

            /**
             * Converts this ResFileDelete to JSON.
             * @function toJSON
             * @memberof bead.msg.ResFileDelete
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResFileDelete.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ResFileDelete
             * @function getTypeUrl
             * @memberof bead.msg.ResFileDelete
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ResFileDelete.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bead.msg.ResFileDelete";
            };

            return ResFileDelete;
        })();

        msg.ReqClearCache = (function() {

            /**
             * Properties of a ReqClearCache.
             * @memberof bead.msg
             * @interface IReqClearCache
             */

            /**
             * Constructs a new ReqClearCache.
             * @memberof bead.msg
             * @classdesc Represents a ReqClearCache.
             * @implements IReqClearCache
             * @constructor
             * @param {bead.msg.IReqClearCache=} [properties] Properties to set
             */
            function ReqClearCache(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new ReqClearCache instance using the specified properties.
             * @function create
             * @memberof bead.msg.ReqClearCache
             * @static
             * @param {bead.msg.IReqClearCache=} [properties] Properties to set
             * @returns {bead.msg.ReqClearCache} ReqClearCache instance
             */
            ReqClearCache.create = function create(properties) {
                return new ReqClearCache(properties);
            };

            /**
             * Encodes the specified ReqClearCache message. Does not implicitly {@link bead.msg.ReqClearCache.verify|verify} messages.
             * @function encode
             * @memberof bead.msg.ReqClearCache
             * @static
             * @param {bead.msg.IReqClearCache} message ReqClearCache message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqClearCache.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified ReqClearCache message, length delimited. Does not implicitly {@link bead.msg.ReqClearCache.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bead.msg.ReqClearCache
             * @static
             * @param {bead.msg.IReqClearCache} message ReqClearCache message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqClearCache.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReqClearCache message from the specified reader or buffer.
             * @function decode
             * @memberof bead.msg.ReqClearCache
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bead.msg.ReqClearCache} ReqClearCache
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqClearCache.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bead.msg.ReqClearCache();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ReqClearCache message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bead.msg.ReqClearCache
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bead.msg.ReqClearCache} ReqClearCache
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqClearCache.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReqClearCache message.
             * @function verify
             * @memberof bead.msg.ReqClearCache
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReqClearCache.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a ReqClearCache message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bead.msg.ReqClearCache
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bead.msg.ReqClearCache} ReqClearCache
             */
            ReqClearCache.fromObject = function fromObject(object) {
                if (object instanceof $root.bead.msg.ReqClearCache)
                    return object;
                return new $root.bead.msg.ReqClearCache();
            };

            /**
             * Creates a plain object from a ReqClearCache message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bead.msg.ReqClearCache
             * @static
             * @param {bead.msg.ReqClearCache} message ReqClearCache
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReqClearCache.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this ReqClearCache to JSON.
             * @function toJSON
             * @memberof bead.msg.ReqClearCache
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReqClearCache.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ReqClearCache
             * @function getTypeUrl
             * @memberof bead.msg.ReqClearCache
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ReqClearCache.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bead.msg.ReqClearCache";
            };

            return ReqClearCache;
        })();

        msg.ResClearCache = (function() {

            /**
             * Properties of a ResClearCache.
             * @memberof bead.msg
             * @interface IResClearCache
             * @property {boolean|null} [success] ResClearCache success
             */

            /**
             * Constructs a new ResClearCache.
             * @memberof bead.msg
             * @classdesc Represents a ResClearCache.
             * @implements IResClearCache
             * @constructor
             * @param {bead.msg.IResClearCache=} [properties] Properties to set
             */
            function ResClearCache(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResClearCache success.
             * @member {boolean} success
             * @memberof bead.msg.ResClearCache
             * @instance
             */
            ResClearCache.prototype.success = false;

            /**
             * Creates a new ResClearCache instance using the specified properties.
             * @function create
             * @memberof bead.msg.ResClearCache
             * @static
             * @param {bead.msg.IResClearCache=} [properties] Properties to set
             * @returns {bead.msg.ResClearCache} ResClearCache instance
             */
            ResClearCache.create = function create(properties) {
                return new ResClearCache(properties);
            };

            /**
             * Encodes the specified ResClearCache message. Does not implicitly {@link bead.msg.ResClearCache.verify|verify} messages.
             * @function encode
             * @memberof bead.msg.ResClearCache
             * @static
             * @param {bead.msg.IResClearCache} message ResClearCache message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResClearCache.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
                return writer;
            };

            /**
             * Encodes the specified ResClearCache message, length delimited. Does not implicitly {@link bead.msg.ResClearCache.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bead.msg.ResClearCache
             * @static
             * @param {bead.msg.IResClearCache} message ResClearCache message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResClearCache.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResClearCache message from the specified reader or buffer.
             * @function decode
             * @memberof bead.msg.ResClearCache
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bead.msg.ResClearCache} ResClearCache
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResClearCache.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bead.msg.ResClearCache();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.success = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResClearCache message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bead.msg.ResClearCache
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bead.msg.ResClearCache} ResClearCache
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResClearCache.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResClearCache message.
             * @function verify
             * @memberof bead.msg.ResClearCache
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResClearCache.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.success != null && message.hasOwnProperty("success"))
                    if (typeof message.success !== "boolean")
                        return "success: boolean expected";
                return null;
            };

            /**
             * Creates a ResClearCache message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bead.msg.ResClearCache
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bead.msg.ResClearCache} ResClearCache
             */
            ResClearCache.fromObject = function fromObject(object) {
                if (object instanceof $root.bead.msg.ResClearCache)
                    return object;
                var message = new $root.bead.msg.ResClearCache();
                if (object.success != null)
                    message.success = Boolean(object.success);
                return message;
            };

            /**
             * Creates a plain object from a ResClearCache message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bead.msg.ResClearCache
             * @static
             * @param {bead.msg.ResClearCache} message ResClearCache
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResClearCache.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.success = false;
                if (message.success != null && message.hasOwnProperty("success"))
                    object.success = message.success;
                return object;
            };

            /**
             * Converts this ResClearCache to JSON.
             * @function toJSON
             * @memberof bead.msg.ResClearCache
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResClearCache.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ResClearCache
             * @function getTypeUrl
             * @memberof bead.msg.ResClearCache
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ResClearCache.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bead.msg.ResClearCache";
            };

            return ResClearCache;
        })();

        msg.ReqReParseFile = (function() {

            /**
             * Properties of a ReqReParseFile.
             * @memberof bead.msg
             * @interface IReqReParseFile
             * @property {string|null} [filepath] ReqReParseFile filepath
             */

            /**
             * Constructs a new ReqReParseFile.
             * @memberof bead.msg
             * @classdesc Represents a ReqReParseFile.
             * @implements IReqReParseFile
             * @constructor
             * @param {bead.msg.IReqReParseFile=} [properties] Properties to set
             */
            function ReqReParseFile(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReqReParseFile filepath.
             * @member {string} filepath
             * @memberof bead.msg.ReqReParseFile
             * @instance
             */
            ReqReParseFile.prototype.filepath = "";

            /**
             * Creates a new ReqReParseFile instance using the specified properties.
             * @function create
             * @memberof bead.msg.ReqReParseFile
             * @static
             * @param {bead.msg.IReqReParseFile=} [properties] Properties to set
             * @returns {bead.msg.ReqReParseFile} ReqReParseFile instance
             */
            ReqReParseFile.create = function create(properties) {
                return new ReqReParseFile(properties);
            };

            /**
             * Encodes the specified ReqReParseFile message. Does not implicitly {@link bead.msg.ReqReParseFile.verify|verify} messages.
             * @function encode
             * @memberof bead.msg.ReqReParseFile
             * @static
             * @param {bead.msg.IReqReParseFile} message ReqReParseFile message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqReParseFile.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.filepath != null && Object.hasOwnProperty.call(message, "filepath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.filepath);
                return writer;
            };

            /**
             * Encodes the specified ReqReParseFile message, length delimited. Does not implicitly {@link bead.msg.ReqReParseFile.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bead.msg.ReqReParseFile
             * @static
             * @param {bead.msg.IReqReParseFile} message ReqReParseFile message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqReParseFile.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReqReParseFile message from the specified reader or buffer.
             * @function decode
             * @memberof bead.msg.ReqReParseFile
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bead.msg.ReqReParseFile} ReqReParseFile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqReParseFile.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bead.msg.ReqReParseFile();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.filepath = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ReqReParseFile message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bead.msg.ReqReParseFile
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bead.msg.ReqReParseFile} ReqReParseFile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqReParseFile.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReqReParseFile message.
             * @function verify
             * @memberof bead.msg.ReqReParseFile
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReqReParseFile.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.filepath != null && message.hasOwnProperty("filepath"))
                    if (!$util.isString(message.filepath))
                        return "filepath: string expected";
                return null;
            };

            /**
             * Creates a ReqReParseFile message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bead.msg.ReqReParseFile
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bead.msg.ReqReParseFile} ReqReParseFile
             */
            ReqReParseFile.fromObject = function fromObject(object) {
                if (object instanceof $root.bead.msg.ReqReParseFile)
                    return object;
                var message = new $root.bead.msg.ReqReParseFile();
                if (object.filepath != null)
                    message.filepath = String(object.filepath);
                return message;
            };

            /**
             * Creates a plain object from a ReqReParseFile message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bead.msg.ReqReParseFile
             * @static
             * @param {bead.msg.ReqReParseFile} message ReqReParseFile
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReqReParseFile.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.filepath = "";
                if (message.filepath != null && message.hasOwnProperty("filepath"))
                    object.filepath = message.filepath;
                return object;
            };

            /**
             * Converts this ReqReParseFile to JSON.
             * @function toJSON
             * @memberof bead.msg.ReqReParseFile
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReqReParseFile.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ReqReParseFile
             * @function getTypeUrl
             * @memberof bead.msg.ReqReParseFile
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ReqReParseFile.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bead.msg.ReqReParseFile";
            };

            return ReqReParseFile;
        })();

        msg.ResReParseFile = (function() {

            /**
             * Properties of a ResReParseFile.
             * @memberof bead.msg
             * @interface IResReParseFile
             * @property {bead.msg.ResReParseFile.ErrorTypeT|null} [errorType] ResReParseFile errorType
             */

            /**
             * Constructs a new ResReParseFile.
             * @memberof bead.msg
             * @classdesc Represents a ResReParseFile.
             * @implements IResReParseFile
             * @constructor
             * @param {bead.msg.IResReParseFile=} [properties] Properties to set
             */
            function ResReParseFile(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResReParseFile errorType.
             * @member {bead.msg.ResReParseFile.ErrorTypeT} errorType
             * @memberof bead.msg.ResReParseFile
             * @instance
             */
            ResReParseFile.prototype.errorType = 0;

            /**
             * Creates a new ResReParseFile instance using the specified properties.
             * @function create
             * @memberof bead.msg.ResReParseFile
             * @static
             * @param {bead.msg.IResReParseFile=} [properties] Properties to set
             * @returns {bead.msg.ResReParseFile} ResReParseFile instance
             */
            ResReParseFile.create = function create(properties) {
                return new ResReParseFile(properties);
            };

            /**
             * Encodes the specified ResReParseFile message. Does not implicitly {@link bead.msg.ResReParseFile.verify|verify} messages.
             * @function encode
             * @memberof bead.msg.ResReParseFile
             * @static
             * @param {bead.msg.IResReParseFile} message ResReParseFile message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResReParseFile.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.errorType != null && Object.hasOwnProperty.call(message, "errorType"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errorType);
                return writer;
            };

            /**
             * Encodes the specified ResReParseFile message, length delimited. Does not implicitly {@link bead.msg.ResReParseFile.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bead.msg.ResReParseFile
             * @static
             * @param {bead.msg.IResReParseFile} message ResReParseFile message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResReParseFile.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResReParseFile message from the specified reader or buffer.
             * @function decode
             * @memberof bead.msg.ResReParseFile
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bead.msg.ResReParseFile} ResReParseFile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResReParseFile.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bead.msg.ResReParseFile();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.errorType = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResReParseFile message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bead.msg.ResReParseFile
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bead.msg.ResReParseFile} ResReParseFile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResReParseFile.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResReParseFile message.
             * @function verify
             * @memberof bead.msg.ResReParseFile
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResReParseFile.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.errorType != null && message.hasOwnProperty("errorType"))
                    switch (message.errorType) {
                    default:
                        return "errorType: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                return null;
            };

            /**
             * Creates a ResReParseFile message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bead.msg.ResReParseFile
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bead.msg.ResReParseFile} ResReParseFile
             */
            ResReParseFile.fromObject = function fromObject(object) {
                if (object instanceof $root.bead.msg.ResReParseFile)
                    return object;
                var message = new $root.bead.msg.ResReParseFile();
                switch (object.errorType) {
                default:
                    if (typeof object.errorType === "number") {
                        message.errorType = object.errorType;
                        break;
                    }
                    break;
                case "Success":
                case 0:
                    message.errorType = 0;
                    break;
                case "Fail":
                case 1:
                    message.errorType = 1;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a ResReParseFile message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bead.msg.ResReParseFile
             * @static
             * @param {bead.msg.ResReParseFile} message ResReParseFile
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResReParseFile.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.errorType = options.enums === String ? "Success" : 0;
                if (message.errorType != null && message.hasOwnProperty("errorType"))
                    object.errorType = options.enums === String ? $root.bead.msg.ResReParseFile.ErrorTypeT[message.errorType] === undefined ? message.errorType : $root.bead.msg.ResReParseFile.ErrorTypeT[message.errorType] : message.errorType;
                return object;
            };

            /**
             * Converts this ResReParseFile to JSON.
             * @function toJSON
             * @memberof bead.msg.ResReParseFile
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResReParseFile.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ResReParseFile
             * @function getTypeUrl
             * @memberof bead.msg.ResReParseFile
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ResReParseFile.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bead.msg.ResReParseFile";
            };

            /**
             * ErrorTypeT enum.
             * @name bead.msg.ResReParseFile.ErrorTypeT
             * @enum {number}
             * @property {number} Success=0 Success value
             * @property {number} Fail=1 Fail value
             */
            ResReParseFile.ErrorTypeT = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "Success"] = 0;
                values[valuesById[1] = "Fail"] = 1;
                return values;
            })();

            return ResReParseFile;
        })();

        msg.ReqExportTypePrompt = (function() {

            /**
             * Properties of a ReqExportTypePrompt.
             * @memberof bead.msg
             * @interface IReqExportTypePrompt
             * @property {string|null} [filepath] ReqExportTypePrompt filepath
             * @property {bead.msg.ILineAndColumn|null} [pos] ReqExportTypePrompt pos
             */

            /**
             * Constructs a new ReqExportTypePrompt.
             * @memberof bead.msg
             * @classdesc Represents a ReqExportTypePrompt.
             * @implements IReqExportTypePrompt
             * @constructor
             * @param {bead.msg.IReqExportTypePrompt=} [properties] Properties to set
             */
            function ReqExportTypePrompt(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReqExportTypePrompt filepath.
             * @member {string} filepath
             * @memberof bead.msg.ReqExportTypePrompt
             * @instance
             */
            ReqExportTypePrompt.prototype.filepath = "";

            /**
             * ReqExportTypePrompt pos.
             * @member {bead.msg.ILineAndColumn|null|undefined} pos
             * @memberof bead.msg.ReqExportTypePrompt
             * @instance
             */
            ReqExportTypePrompt.prototype.pos = null;

            /**
             * Creates a new ReqExportTypePrompt instance using the specified properties.
             * @function create
             * @memberof bead.msg.ReqExportTypePrompt
             * @static
             * @param {bead.msg.IReqExportTypePrompt=} [properties] Properties to set
             * @returns {bead.msg.ReqExportTypePrompt} ReqExportTypePrompt instance
             */
            ReqExportTypePrompt.create = function create(properties) {
                return new ReqExportTypePrompt(properties);
            };

            /**
             * Encodes the specified ReqExportTypePrompt message. Does not implicitly {@link bead.msg.ReqExportTypePrompt.verify|verify} messages.
             * @function encode
             * @memberof bead.msg.ReqExportTypePrompt
             * @static
             * @param {bead.msg.IReqExportTypePrompt} message ReqExportTypePrompt message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqExportTypePrompt.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.filepath != null && Object.hasOwnProperty.call(message, "filepath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.filepath);
                if (message.pos != null && Object.hasOwnProperty.call(message, "pos"))
                    $root.bead.msg.LineAndColumn.encode(message.pos, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ReqExportTypePrompt message, length delimited. Does not implicitly {@link bead.msg.ReqExportTypePrompt.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bead.msg.ReqExportTypePrompt
             * @static
             * @param {bead.msg.IReqExportTypePrompt} message ReqExportTypePrompt message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqExportTypePrompt.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReqExportTypePrompt message from the specified reader or buffer.
             * @function decode
             * @memberof bead.msg.ReqExportTypePrompt
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bead.msg.ReqExportTypePrompt} ReqExportTypePrompt
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqExportTypePrompt.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bead.msg.ReqExportTypePrompt();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.filepath = reader.string();
                            break;
                        }
                    case 2: {
                            message.pos = $root.bead.msg.LineAndColumn.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ReqExportTypePrompt message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bead.msg.ReqExportTypePrompt
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bead.msg.ReqExportTypePrompt} ReqExportTypePrompt
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqExportTypePrompt.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReqExportTypePrompt message.
             * @function verify
             * @memberof bead.msg.ReqExportTypePrompt
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReqExportTypePrompt.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.filepath != null && message.hasOwnProperty("filepath"))
                    if (!$util.isString(message.filepath))
                        return "filepath: string expected";
                if (message.pos != null && message.hasOwnProperty("pos")) {
                    var error = $root.bead.msg.LineAndColumn.verify(message.pos);
                    if (error)
                        return "pos." + error;
                }
                return null;
            };

            /**
             * Creates a ReqExportTypePrompt message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bead.msg.ReqExportTypePrompt
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bead.msg.ReqExportTypePrompt} ReqExportTypePrompt
             */
            ReqExportTypePrompt.fromObject = function fromObject(object) {
                if (object instanceof $root.bead.msg.ReqExportTypePrompt)
                    return object;
                var message = new $root.bead.msg.ReqExportTypePrompt();
                if (object.filepath != null)
                    message.filepath = String(object.filepath);
                if (object.pos != null) {
                    if (typeof object.pos !== "object")
                        throw TypeError(".bead.msg.ReqExportTypePrompt.pos: object expected");
                    message.pos = $root.bead.msg.LineAndColumn.fromObject(object.pos);
                }
                return message;
            };

            /**
             * Creates a plain object from a ReqExportTypePrompt message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bead.msg.ReqExportTypePrompt
             * @static
             * @param {bead.msg.ReqExportTypePrompt} message ReqExportTypePrompt
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReqExportTypePrompt.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.filepath = "";
                    object.pos = null;
                }
                if (message.filepath != null && message.hasOwnProperty("filepath"))
                    object.filepath = message.filepath;
                if (message.pos != null && message.hasOwnProperty("pos"))
                    object.pos = $root.bead.msg.LineAndColumn.toObject(message.pos, options);
                return object;
            };

            /**
             * Converts this ReqExportTypePrompt to JSON.
             * @function toJSON
             * @memberof bead.msg.ReqExportTypePrompt
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReqExportTypePrompt.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ReqExportTypePrompt
             * @function getTypeUrl
             * @memberof bead.msg.ReqExportTypePrompt
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ReqExportTypePrompt.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bead.msg.ReqExportTypePrompt";
            };

            return ReqExportTypePrompt;
        })();

        msg.ResExportTypePrompt = (function() {

            /**
             * Properties of a ResExportTypePrompt.
             * @memberof bead.msg
             * @interface IResExportTypePrompt
             * @property {bead.msg.ResExportTypePrompt.ErrorTypeT|null} [errorType] ResExportTypePrompt errorType
             */

            /**
             * Constructs a new ResExportTypePrompt.
             * @memberof bead.msg
             * @classdesc Represents a ResExportTypePrompt.
             * @implements IResExportTypePrompt
             * @constructor
             * @param {bead.msg.IResExportTypePrompt=} [properties] Properties to set
             */
            function ResExportTypePrompt(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResExportTypePrompt errorType.
             * @member {bead.msg.ResExportTypePrompt.ErrorTypeT} errorType
             * @memberof bead.msg.ResExportTypePrompt
             * @instance
             */
            ResExportTypePrompt.prototype.errorType = 0;

            /**
             * Creates a new ResExportTypePrompt instance using the specified properties.
             * @function create
             * @memberof bead.msg.ResExportTypePrompt
             * @static
             * @param {bead.msg.IResExportTypePrompt=} [properties] Properties to set
             * @returns {bead.msg.ResExportTypePrompt} ResExportTypePrompt instance
             */
            ResExportTypePrompt.create = function create(properties) {
                return new ResExportTypePrompt(properties);
            };

            /**
             * Encodes the specified ResExportTypePrompt message. Does not implicitly {@link bead.msg.ResExportTypePrompt.verify|verify} messages.
             * @function encode
             * @memberof bead.msg.ResExportTypePrompt
             * @static
             * @param {bead.msg.IResExportTypePrompt} message ResExportTypePrompt message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResExportTypePrompt.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.errorType != null && Object.hasOwnProperty.call(message, "errorType"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errorType);
                return writer;
            };

            /**
             * Encodes the specified ResExportTypePrompt message, length delimited. Does not implicitly {@link bead.msg.ResExportTypePrompt.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bead.msg.ResExportTypePrompt
             * @static
             * @param {bead.msg.IResExportTypePrompt} message ResExportTypePrompt message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResExportTypePrompt.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResExportTypePrompt message from the specified reader or buffer.
             * @function decode
             * @memberof bead.msg.ResExportTypePrompt
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bead.msg.ResExportTypePrompt} ResExportTypePrompt
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResExportTypePrompt.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bead.msg.ResExportTypePrompt();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.errorType = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResExportTypePrompt message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bead.msg.ResExportTypePrompt
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bead.msg.ResExportTypePrompt} ResExportTypePrompt
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResExportTypePrompt.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResExportTypePrompt message.
             * @function verify
             * @memberof bead.msg.ResExportTypePrompt
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResExportTypePrompt.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.errorType != null && message.hasOwnProperty("errorType"))
                    switch (message.errorType) {
                    default:
                        return "errorType: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                return null;
            };

            /**
             * Creates a ResExportTypePrompt message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bead.msg.ResExportTypePrompt
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bead.msg.ResExportTypePrompt} ResExportTypePrompt
             */
            ResExportTypePrompt.fromObject = function fromObject(object) {
                if (object instanceof $root.bead.msg.ResExportTypePrompt)
                    return object;
                var message = new $root.bead.msg.ResExportTypePrompt();
                switch (object.errorType) {
                default:
                    if (typeof object.errorType === "number") {
                        message.errorType = object.errorType;
                        break;
                    }
                    break;
                case "Success":
                case 0:
                    message.errorType = 0;
                    break;
                case "Fail":
                case 1:
                    message.errorType = 1;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a ResExportTypePrompt message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bead.msg.ResExportTypePrompt
             * @static
             * @param {bead.msg.ResExportTypePrompt} message ResExportTypePrompt
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResExportTypePrompt.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.errorType = options.enums === String ? "Success" : 0;
                if (message.errorType != null && message.hasOwnProperty("errorType"))
                    object.errorType = options.enums === String ? $root.bead.msg.ResExportTypePrompt.ErrorTypeT[message.errorType] === undefined ? message.errorType : $root.bead.msg.ResExportTypePrompt.ErrorTypeT[message.errorType] : message.errorType;
                return object;
            };

            /**
             * Converts this ResExportTypePrompt to JSON.
             * @function toJSON
             * @memberof bead.msg.ResExportTypePrompt
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResExportTypePrompt.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ResExportTypePrompt
             * @function getTypeUrl
             * @memberof bead.msg.ResExportTypePrompt
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ResExportTypePrompt.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bead.msg.ResExportTypePrompt";
            };

            /**
             * ErrorTypeT enum.
             * @name bead.msg.ResExportTypePrompt.ErrorTypeT
             * @enum {number}
             * @property {number} Success=0 Success value
             * @property {number} Fail=1 Fail value
             */
            ResExportTypePrompt.ErrorTypeT = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "Success"] = 0;
                values[valuesById[1] = "Fail"] = 1;
                return values;
            })();

            return ResExportTypePrompt;
        })();

        return msg;
    })();

    return bead;
})();

module.exports = $root;
