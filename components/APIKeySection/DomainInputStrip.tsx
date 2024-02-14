import { Dispatch, SetStateAction, useState } from 'react';
import { toast } from 'react-hot-toast';

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useAccount, useDisconnect } from 'wagmi';

import { cn, extractProjectName } from '../../helpers/utils';

interface props {
  apiKey: string;
  setProjectName: Dispatch<SetStateAction<string | null>>;
  setApiKey: Dispatch<SetStateAction<string>>;
  setProjectId: Dispatch<SetStateAction<string>>;
}

const DomainInputStrip: React.FC<props> = ({
  apiKey,
  setProjectName,
  setApiKey,
  setProjectId,
}) => {
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();
  const [newProjectName, setNewProjectName] = useState<string>('');

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProjectName(e.target.value);
  };

  const { mutateAsync: sendDomain } = useMutation({
    mutationFn: async () => {
      if (!apiKey.length || !newProjectName.length)
        throw new Error('Invalid Domain');
      const { data } = await axios.request<{
        message: string;
        domain: string;
      }>({
        method: 'POST',
        url: '/docs/api/addDomain',
        data: {
          apiKey,
          domain: newProjectName,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return data;
    },
    onSuccess: ({ domain }) => {
      setProjectName(domain);
      toast.success('Project name set successfully');
    },
    onError: (err) => {
      console.error(err);
      toast.error('Error adding domain');
    },
  });

  const { mutateAsync: addApiKey } = useMutation({
    mutationFn: async ({ address }: { address: string; chain: string }) => {
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

  const handleSubmit = async () => {
    if (isConnected) {
      if (newProjectName.length > 0) {
        await addApiKey({
          address,
          chain: 'ETHEREUM',
        });
        await sendDomain();
      } else {
        toast.error('Invalid Project Name');
      }
    } else {
      toast.error('Please connect your wallet first');
    }
  };

  return (
    <div className='flex flex-col gap-2 w-3/4'>
      <div className='flex gap-3 justify-between items-center'>
        <span className='font-semibold text-slate-400'>Project Name</span>
      </div>

      <div className='bg-[#2D3748] flex gap-3  items-center justify-center rounded-lg shadow-md px-4 py-2'>
        <input
          disabled={!isConnected}
          type='url'
          className={cn(
            'grow text-lg rounded-lg p-2 border-none bg-transparent focus:outline-none outline-none',
            !isConnected ? 'blur-sm' : ''
          )}
          value={newProjectName}
          onChange={onChangeHandler}
          placeholder='Enter your project name'
        />
        <button
          onClick={handleSubmit}
          disabled={!isConnected}
          className='bg-blue-400 p-2 rounded-lg text-black font-semibold'
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default DomainInputStrip;
