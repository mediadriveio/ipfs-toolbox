import React from 'react';
import {ITool} from '../App';
import LanIcon from '@mui/icons-material/Lan';
import {EmbedTool} from './EmbedTool';
import {lazy} from 'react';

const IpnsTool = lazy(() => import('./ipns/IpnsTool'));
export const IpnsToolDefinition: ITool = {
	name: 'IPNS',
	tool: <IpnsTool/>,
};

export const IpfsWebUIDefinition: ITool = {
	name: 'IPFS WebUI',
	tool: EmbedTool.create('https://webui.ipfs.io.ipns.dweb.link'),
	image: 'https://raw.githubusercontent.com/ipfs/ipfs-webui/main/docs/screenshots/ipfs-webui-status.png'
};

export const IpfsCidToolDefinition: ITool = {
	name: 'IPFS CID',
	tool: EmbedTool.create('https://cid.ipfs.io.ipns.dweb.link'),
};

const ClusterTool = lazy(() => import('./cluster/ClusterTool'));
export const IpfsClusterToolDefinition: ITool = {
	icon: <LanIcon/>,
	name: 'Cluster',
	tool: <ClusterTool/>,
	image: 'https://raw.githubusercontent.com/InterplanetaryDevs/ipfs-toolbox/master/docs/img/ipfs-cluster-webui.png'
};

export const TOOLS: IToolCategory[] = [
		{name: 'Official', tools: [IpfsWebUIDefinition, IpfsCidToolDefinition]},
		{name: 'Tools', tools: [IpnsToolDefinition, IpfsClusterToolDefinition]},
	]
;

export interface IToolCategory {
	name: string,
	tools: ITool[]
}