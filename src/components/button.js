import { useContext } from 'react';
import { valueContext } from '../providers/value.provider';

export function Button() {
    const { value } = useContext(valueContext);
    return (
        <button onClick={() => alert(value)}>{value}</button>
    )
}