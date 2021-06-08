import { gql } from '@apollo/client';

const GET_PEOPLE = gql`
query{
	allPeople{
    people{
      name 
      id
        }
      }
    }

`;

export default GET_PEOPLE;