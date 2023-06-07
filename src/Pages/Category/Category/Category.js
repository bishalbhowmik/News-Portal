import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const newsCategory = useLoaderData();
    return (
        <div>
            <h1>This is category</h1>
            {
                newsCategory.map(nc =><NewsSummaryCard
                key={nc.id}
                news={nc}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;