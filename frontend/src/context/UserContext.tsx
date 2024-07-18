import axios from 'axios';
import { IUser } from '../types/user';
import { createContext, useEffect, useState } from "react";
import { API_URL, SEP } from '../conf/globals';

export const UserContext = createContext<{ user: IUser | null; setUser: React.Dispatch<React.SetStateAction<IUser | null>> }>(null!);

const UserProvider = ({ children }: any) => {

	const [user, setUser] = useState<IUser | null>(null);

	useEffect(() => {
		const token = localStorage.getItem('auth_token');
		if (token) {
			axios.get(`${API_URL}${SEP}test_token`, {
				headers: {
					'Authorization': `Token ${token}`
				}
			}).then(response => {
				setUser(response.data);
			}).catch(error => {
				setUser(null);
				console.error(error);
			});
		}
	}, []);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	)
}

export default UserProvider;