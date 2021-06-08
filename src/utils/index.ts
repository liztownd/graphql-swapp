import { gql } from '@apollo/client';

export const GET_PEOPLE = gql`
query{
	allPeople{
    people{
      name 
      id
        }
      }
    }

`;

export const GET_FILMS = gql`
query Person ($id: string){
	person (id: $id){
      name 
    	filmConnection{
        films{
          title
          characterConnection{
            characters{
              name
              id
            }
          }
        }
      }
        }
      }
`;

