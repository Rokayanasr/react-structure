import { SearchIcon } from '@/assets/icons';
import Input from '@/components/form/input/InputField';
import { SearchProps } from '@/constants/helpers.const';
import { ChangeEvent } from 'react';

const Search = ({ value, onChange, placeholder = 'Suche...', className = '' }: SearchProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className={`relative w-full ${className}`}>
            <Input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                required={false}
                className="pl-10"
            />
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 fill-current pointer-events-none" />
        </div>
    );
};

export default Search;