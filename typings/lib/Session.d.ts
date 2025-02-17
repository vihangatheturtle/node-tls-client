import { Methods, RequestOptions, GetRequestOptions, PostRequestOptions, PatchRequestOptions, PutRequestOptions, DeleteRequestOptions, OptionsRequestOptions, HeadRequestOptions, SessionOptions } from "../interface/session";
import { Response } from ".";
import { Cookie, CookieJar } from "tough-cookie";
export declare class Session {
    private sessionId?;
    private proxy?;
    private isRotatingProxy;
    private clientIdentifier?;
    private ja3string?;
    private h2Settings?;
    private h2SettingsOrder?;
    private supportedSignatureAlgorithms?;
    private supportedVersions?;
    private keyShareCurves?;
    private certCompressionAlgo?;
    private pseudoHeaderOrder?;
    private connectionFlow?;
    private priorityFrames?;
    headerOrder?: string[];
    private headerPriority?;
    private randomTlsExtensionOrder?;
    private forceHttp1?;
    private debug?;
    private insecureSkipVerify?;
    private headers;
    private alpnProtocols?;
    private alpsProtocols;
    private timeout;
    private disableIPV6;
    private disableIPV4;
    private jar;
    private pool?;
    isReady: boolean;
    constructor(options?: SessionOptions);
    init(): Promise<boolean>;
    /**
     * Retrieves all cookies from the jar.
     *
     * @returns An object where keys are URLs and values are objects containing cookies as key-value pairs.
     *
     * @example
      {
         "https://example.com/": {
           "cookie1": "value1",
           "cookie2": "value2"
         },
         "https://anotherdomain.com/": {
           "cookieA": "valueA",
           "cookieB": "valueB"
         }
      }
     */
    get cookies(): Cookie.Serialized;
    /**
     * Sets a cookie
     *
     * @returns void.
     *
     * @example
      setCookie
     */
    setCookie(cookie: {
        name: string;
        value: string;
        expires?: Date;
        sameSite?: string;
        secure?: boolean;
        domain?: string;
        path?: string;
        httpOnly?: boolean;
    }, url: string, opts?: CookieJar.SetCookieOptions): void;
    /**
     * The 'close' method closes the current session.
     *
     * @returns The response from the 'destroySession' function.
     */
    close(): Promise<any>;
    /**
     * The 'freeMemory' method frees the memory used by the session with the provided id.
     *
     * @param id - The id of the session to free the memory of.
     *
     * @returns The response from the 'destroySession' function.
     */
    private free;
    /**
     * The 'get' method performs a GET request to the provided URL with the provided options.
     *
     * @param url - The URL to perform the GET request to.
     * @param options - The options for the GET request.
     *
     * @returns The response from the 'execute' method.
     */
    get(url: string, options?: GetRequestOptions): Promise<Response>;
    /**
     * The 'delete' method performs a DELETE request to the provided URL with the provided options.
     *
     * @param url - The URL to perform the DELETE request to.
     * @param options - The options for the DELETE request.
     *
     * @returns The response from the 'execute' method.
     */
    delete(url: string, options?: DeleteRequestOptions): Promise<Response>;
    /**
     * The 'options' method performs an OPTIONS request to the provided URL with the provided options.
     *
     * @param url - The URL to perform the OPTIONS request to.
     * @param options - The options for the OPTIONS request.
     *
     * @returns The response from the 'execute' method.
     */
    options(url: string, options?: OptionsRequestOptions): Promise<Response>;
    /**
     * The 'head' method performs a HEAD request to the provided URL with the provided options.
     *
     * @param url - The URL to perform the HEAD request to.
     * @param options - The options for the HEAD request.
     *
     * @returns The response from the 'execute' method.
     */
    head(url: string, options?: HeadRequestOptions): Promise<Response>;
    /**
     * The 'post' method performs a POST request to the provided URL with the provided options.
     *
     * @param url - The URL to perform the POST request to.
     * @param options - The options for the POST request.
     *
     * @returns The response from the 'execute' method.
     */
    post(url: string, options?: PostRequestOptions): Promise<Response>;
    /**
     * The 'patch' method performs a PATCH request to the provided URL with the provided options.
     *
     * @param url - The URL to perform the PATCH request to.
     * @param options - The options for the PATCH request.
     *
     * @returns The response from the 'execute' method.
     */
    patch(url: string, options?: PatchRequestOptions): Promise<Response>;
    /**
     * The 'put' method performs a PUT request to the provided URL with the provided options.
     *
     * @param url - The URL to perform the PUT request to.
     * @param options - The options for the PUT request.
     *
     * @returns The response from the 'execute' method.
     */
    put(url: string, options?: PutRequestOptions): Promise<Response>;
    /**
     * The 'execute' method performs a HTTP request of the provided method to the provided URL with the provided options.
     *
     * @param method - The HTTP method of the request.
     * @param url - The URL to perform the request to.
     * @param options - The options for the request.
     *
     * @returns A new Response object.
     */
    protected execute(method: Methods, url: string, options: RequestOptions): Promise<Response>;
}
