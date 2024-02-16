import React, { useEffect, useState } from 'react';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useAccount, useDisconnect } from 'wagmi';

import { cn } from '../../helpers/utils';
import DomainInputStrip from './DomainInputStrip';
import KeyStrip from './KeyStrip';

const APISection = () => {
  const [apiKey, setApiKey] = useState('');
  const [projectId, setProjectId] = useState('');
  const [projectName, setProjectName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { mutateAsync: fetchApiKey } = useMutation({
    mutationFn: async ({ address }: { address: string }) => {
      setIsLoading(true);
      const { data } = await axios.request<{
        apiKey: string;
        message: string;
        projectId: string;
        domain: string;
      }>({
        method: 'GET',
        url: `/docs/api/getApiKey?address=${address}`,
      });
      return data;
    },
    onSuccess: ({ apiKey, projectId, domain }) => {
      setApiKey(apiKey);
      setProjectId(projectId);
      if (!domain || domain === '[]') return;
      setProjectName(domain);
    },
  });

  const { isConnected, status } = useAccount({
    onConnect({ address }) {
      if (address) {
        fetchApiKey({
          address,
        })
          .then(() => {
            setIsLoading(false);
          })
          .catch((err) => {
            setIsLoading(false);
            console.error(err);
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
      {isConnected && !isLoading && (
        <div className={cn('flex flex-col items-center gap-5 w-full')}>
          {projectName?.length > 0 ? (
            <>
              <KeyStrip label='API Key' text={apiKey} />
              <KeyStrip label='Project ID' text={projectId} />
            </>
          ) : (
            <DomainInputStrip
              apiKey={apiKey}
              setProjectName={setProjectName}
              setApiKey={setApiKey}
              setProjectId={setProjectId}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default APISection;
