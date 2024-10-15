import * as React from "react";
import { FaCopy } from "react-icons/fa";
interface IListProps {
  id: number;
  title: string;
  url: string | undefined;
  isCopied: boolean;
  copyHandler: (id: number) => void;
}

const List: React.FunctionComponent<IListProps> = ({
  copyHandler,
  id,
  title,
  url,
  isCopied,
}) => {
  return (
    <li key={id}>
      <div className="flex flex-col gap-3">
        <div className="flex items-start"> {title}</div>

        <div>
          {url && (
            <div className="flex rounded-lg bg-gray-200 w-full p-4">
              <div className="flex flex-1">{url}</div>
              <div
                className="flex items-center"
                onClick={() => copyHandler(id)}
              >
                {isCopied && (
                  <div className="ml-2 px-2 py-1 text-xs rounded-full bg-black text-white">
                    Copied!
                  </div>
                )}

                <FaCopy />
              </div>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default List;
