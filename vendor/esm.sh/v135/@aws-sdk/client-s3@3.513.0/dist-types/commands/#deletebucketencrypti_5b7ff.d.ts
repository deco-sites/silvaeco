import { Command as $Command } from "https://esm.sh/v135/@smithy/smithy-client@2.3.1/dist-types/index.d.ts";
import { MetadataBearer as __MetadataBearer } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
import { DeleteBucketEncryptionRequest } from "../models/models_0.d.ts";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client.d.ts";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteBucketEncryptionCommand}.
 */
export interface DeleteBucketEncryptionCommandInput extends DeleteBucketEncryptionRequest {
}
/**
 * @public
 *
 * The output of {@link DeleteBucketEncryptionCommand}.
 */
export interface DeleteBucketEncryptionCommandOutput extends __MetadataBearer {
}
declare const DeleteBucketEncryptionCommand_base: {
    new (input: DeleteBucketEncryptionCommandInput): import("https://esm.sh/v135/@smithy/smithy-client@2.3.1/dist-types/index.d.ts").CommandImpl<DeleteBucketEncryptionCommandInput, DeleteBucketEncryptionCommandOutput, S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("https://esm.sh/v135/@smithy/middleware-endpoint@2.4.1/dist-types/index.d.ts").EndpointParameterInstructions;
};
/**
 * @public
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>This implementation of the DELETE action resets the default encryption for the bucket as
 *          server-side encryption with Amazon S3 managed keys (SSE-S3). For information about the bucket
 *          default encryption feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html">Amazon S3 Bucket Default Encryption</a>
 *          in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>To use this operation, you must have permissions to perform the
 *             <code>s3:PutEncryptionConfiguration</code> action. The bucket owner has this permission
 *          by default. The bucket owner can grant this permission to others. For more information
 *          about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing
 *             Access Permissions to your Amazon S3 Resources</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <p>The following operations are related to <code>DeleteBucketEncryption</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketEncryption.html">PutBucketEncryption</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketEncryption.html">GetBucketEncryption</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteBucketEncryptionCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteBucketEncryptionCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // DeleteBucketEncryptionRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new DeleteBucketEncryptionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBucketEncryptionCommandInput - {@link DeleteBucketEncryptionCommandInput}
 * @returns {@link DeleteBucketEncryptionCommandOutput}
 * @see {@link DeleteBucketEncryptionCommandInput} for command's `input` shape.
 * @see {@link DeleteBucketEncryptionCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 */
export declare class DeleteBucketEncryptionCommand extends DeleteBucketEncryptionCommand_base {
}
