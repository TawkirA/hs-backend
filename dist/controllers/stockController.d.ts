import type { Request, Response, NextFunction } from 'express';
export declare const getQuote: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getHistoricalData: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const search: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getTopStocks: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getStockList: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getStocks: (req: Request, res: Response) => Promise<void>;
export declare const getFilteredStocks: (req: Request, res: Response) => Promise<void>;
export declare const topStocksByMarketCap: (req: Request, res: Response) => Promise<void>;
export declare const getHistorical: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getFundamentals: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=stockController.d.ts.map