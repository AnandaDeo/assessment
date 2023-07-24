const { gql } = require('apollo-server');

const typeDefs = gql`
    type Desc {
        _id: ID!,
        desc: String! 
    }
    
    type Query {
        getAllDatas: [Desc]!,
        getDesc(_id: ID!): Desc
    }

    type Mutation  {
        createDesc(
            desc: String!
        ): Desc!,
        
        updateDesc(
            _id: ID!,
            desc: String 
        ): Desc!,
        deleteDesc(_id: ID!):Boolean
    }
`;

module.exports = typeDefs;