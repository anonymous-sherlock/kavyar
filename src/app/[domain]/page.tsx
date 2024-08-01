import React from "react";

type Props = {
  params: {
    domain: string;
  };
};

function DomainPage({ params: { domain } }: Props) {
  return <div>DomainPage : {domain}</div>;
}

export default DomainPage;
