// Mock user data for example
const services: any = {};
import { ApiResponse } from '../../utility-services/ApiResponce';
import db from '../../database/dbConnect';
import { users } from '../../database/schema';
import { eq } from 'drizzle-orm';
// Service function to get user details
const getUserService = async () => {
  const user = await db.select().from(users);

  if (!user.length) {
    throw new Error('User not found');
  }

  return user;
};

export const getUsers = async (req: any, res: any, next: any) => {
  try {
    const user = await getUserService();
    const response = ApiResponse(200, 'Success', user);
    res.json(response);
  } catch (error) {
    next(error);
  }
};
