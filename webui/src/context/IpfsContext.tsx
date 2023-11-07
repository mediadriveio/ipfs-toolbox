import React, {createContext, PropsWithChildren, useCallback, useContext, useMemo, useState} from 'react';
import {create, IPFSHTTPClient} from 'kubo-rpc-client';

export interface IIpfsContext {
	apiUrl: string;

	setApiUrl(value: string): void;

	ipfs: IPFSHTTPClient;

	checker: () => Promise<boolean>
}

const IpfsContext = createContext<IIpfsContext>({} as IIpfsContext);

export function IpfsContextProvider(props: PropsWithChildren) {
	const [apiUrl, setApiUrl] = useState<string>('/ip4/127.0.0.1/tcp/5001');

	const ipfs = useMemo(() => create({url: apiUrl}), [apiUrl]);

	const checker = useCallback(() => ipfs.id().then(() => true), [ipfs])

	return <IpfsContext.Provider value={{
		apiUrl,
		setApiUrl,
		ipfs,
		checker
	}}>
		{props.children}
	</IpfsContext.Provider>;
}

export function useIpfs() {
	return useContext(IpfsContext);
}
