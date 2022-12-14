import React, { Fragment } from 'react';

type InputLayoutProps = {
    columns: number,
    children?: React.ReactNode
};

const InputLayout = ({ columns, children }: InputLayoutProps) => (
    <Fragment>
        {
            columns===3 ? <div className="col-span-12 lg:col-span-3">
                {children}
            </div> : ''
        }
        {
            columns===4 ? <div className="col-span-12 lg:col-span-4">
                {children}
            </div> : ''
        }
        {
            columns===6 ? <div className="col-span-12 lg:col-span-6">
                {children}
            </div> : ''
        }
        {
            columns===8 ? <div className="col-span-12 lg:col-span-8">
                {children}
            </div> : ''
        }
        {
            columns===9 ? <div className="col-span-12 lg:col-span-9">
                {children}
            </div> : ''
        }
        {
            columns===12 ? <div className="col-span-12">
                {children}
            </div> : ''
        }
    </Fragment>
);

export default InputLayout;