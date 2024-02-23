import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';
import Loading from './Loading';

const FilterCard = ({ activeCategory, handleFilterChange }) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const db = getFirestore();
                const categoriesCollection = collection(db, 'categories');
                const categoriesSnapshot = await getDocs(categoriesCollection);
                const categoriesData = categoriesSnapshot.docs.map(doc => doc.data().name);
                setCategories(categoriesData);
            } catch (error) {
                console.error('Error fetching categories: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    return (
 <>
             <h3>Filter</h3>
            <h5>Category</h5>
            <ul>
                <li>
                    <Link to="/Store">All Products</Link>
                </li>
                <li>
                    <Link to="/Store/category/Men's">Men's</Link>
                </li>
                <li>
                    <Link to="/Store/category/Women's">Women's</Link>
                </li>
                <li>
                    <Link to="/Store/category/Electronics">Electronics</Link>
                </li>
            </ul>
 </>
    );
};

export default FilterCard;
