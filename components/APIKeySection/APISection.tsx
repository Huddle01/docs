import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useAccount, useDisconnect } from 'wagmi';

import { cn, extractProjectName } from '../../helpers/utils';
import DomainInputStrip from './DomainInputStrip';
import KeyStrip from './KeyStrip';

const APISection = () => {
  const [apiKey, setApiKey] = useState('');
  const [projectId, setProjectId] = useState('');
  const [projectName, setProjectName] = useState<string | null>(null);
  const { disconnect } = useDisconnect();

  const { mutateAsync: fetchApiKey } = useMutation({
    mutationFn: async ({
      address,
      chain,
    }: {
      address: string;
      chain: string;
    }) => {
      const { data } = await axios.request<{
        apiKey: string;
        message: string;
        projectId: string;
        domain: string;
      }>({
        method: 'POST',
        url: '/docs/api/apiKey',
        data: {
          address,
          walletChain: chain,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return data;
    },
    onSuccess: ({ apiKey, projectId, domain }) => {
      setApiKey(apiKey);
      setProjectId(projectId);
      if (!domain || !domain.length) return;
      const name = extractProjectName(domain);
      setProjectName(name);
    },
    onError: (err) => {
      disconnect();
      console.error(err);
      toast.error('Error getting API Key');
    },
  });

  const { isConnected, status } = useAccount({
    onConnect({ address }) {
      if (address) {
        fetchApiKey({
          address,
          chain: 'ETHEREUM',
        })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    onDisconnect() {
      setProjectName(null);
    },
  });

  useEffect(() => {
    console.log('status', status);
  }, [status]);

  return (
    <div className='flex flex-col gap-6 mt-10 justify-center items-center w-full'>
      <ConnectButton />
      <span className='font-bold text-lg'>{projectName}</span>
      {isConnected && (
        <div className={cn('flex flex-col items-center gap-5 w-full')}>
          {projectName?.length > 0 ? (
            <>
              <KeyStrip label='API Key' text={apiKey} />
              <KeyStrip label='Project ID' text={projectId} />
            </>
          ) : (
            <DomainInputStrip apiKey={apiKey} setProjectName={setProjectName} />
          )}
        </div>
      )}
    </div>
  );
};

export default APISection;
