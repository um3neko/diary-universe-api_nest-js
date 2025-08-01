import {User} from './user.entity';

export interface UserRepository {
	findById(id: string): Promise<User | null>;
	findByEmail(email: string): Promise<User | null>;
	save(user: User): Promise<void>;
	authenticate(email: string, password: string): Promise<User | null>;
}
