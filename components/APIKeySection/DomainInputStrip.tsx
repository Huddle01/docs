import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import CommonIcons from '@components/assets/CommonIcons';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useAccount } from 'wagmi';

import { cn, isValidDomain } from '../../helpers/utils';

interface props {
  apiKey: string;
  exisitingDomain: string | null;
}

const DomainInputStrip: React.FC<props> = ({ apiKey, exisitingDomain }) => {
  const [domain, setDomain] = useState<string>('');
  const [isDomainValid, setIsDomainValid] = useState(true);

  const [newDomain, setNewDomain] = useState<string>('');

  const { isConnected } = useAccount();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDomain(e.target.value);
  };

  const { mutate: sendDomain } = useMutation({
    mutationFn: async () => {
      if (!apiKey.length || !domain.length) throw new Error('Invalid Domain');
      const { data } = await axios.request<{
        message: string;
        domain: string;
      }>({
        method: 'POST',
        url: '/docs/api/addDomain',
        data: {
          apiKey,
          domain,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return data;
    },
    onSuccess: ({ message, domain }) => {
      setDomain('');
      setNewDomain(domain);
      toast.success(message);
    },
    onError: err => {
      console.error(err);
      toast.error('Error adding domain');
    },
  });

  const handleSubmit = () => {
    const isValid = isValidDomain(domain);
    if (!isValid) {
      setIsDomainValid(false);
      setDomain('');
      setTimeout(() => {
        setIsDomainValid(true);
      }, 2000);
      return;
    }
    if (isConnected && isValid) {
      sendDomain();
    }
  };

  useEffect(() => {
    setNewDomain('');
  }, [isConnected]);

  return (
    <div className="flex flex-col gap-2 w-3/4">
      <div className="flex gap-3 justify-between items-center">
        <span className="font-semibold text-slate-400">Whitelist Domain</span>
        {isConnected && exisitingDomain && !newDomain && (
          <span className="bg-gray-500 self-end text-black font-bold text-sm p-1 rounded-sm w-fit ">
            {exisitingDomain}
          </span>
        )}
        {isConnected && newDomain && (
          <span className="bg-gray-500 text-black font-bold text-sm p-1 rounded-md w-fit ">
            {newDomain}
          </span>
        )}
      </div>

      <div className="bg-[#2D3748] flex gap-3  items-center justify-center rounded-lg shadow-md px-4 py-2">
        <input
          disabled={!isConnected}
          type="url"
          className={cn(
            'grow text-lg rounded-lg p-2 border-none bg-transparent focus:outline-none outline-none',
            !isConnected ? 'blur-sm' : ''
          )}
          value={domain}
          onChange={onChangeHandler}
          placeholder="Enter Domain to be Whitelisted"
        />
        {isDomainValid ? null : (
          <span className="grow text-base text-red-500 text-right">
            Invalid Domain
          </span>
        )}
        <button
          onClick={handleSubmit}
          disabled={!isConnected}
          className="bg-blue-400 p-1 rounded-full"
        >
          {CommonIcons.plus}
        </button>
      </div>
    </div>
  );
};

export default DomainInputStrip;
