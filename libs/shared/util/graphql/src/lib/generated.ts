import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export class Scalars {
  ID!: string;
  String!: string;
  Boolean!: boolean;
  Int!: number;
  Float!: number;
  Date: any;
  Upload: any;
}

export class ChangePwdInput {
  password!: Scalars['String'];
  username!: Scalars['String'];
}

export class Error {
  __typename?: 'Error';
  location?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  statusCode?: Maybe<Scalars['Int']>;
}

export class LoginUserInput {
  password!: Scalars['String'];
  username!: Scalars['String'];
}

export class Mutation {
  __typename?: 'Mutation';
  changePwd?: Maybe<Scalars['Boolean']>;
  resetPwd?: Maybe<Scalars['Boolean']>;
}

export class MutationChangePwdArgs {
  input!: ChangePwdInput;
}

export class MutationResetPwdArgs {
  input!: ResetPwdInput;
}

export class Query {
  __typename?: 'Query';
  error?: Maybe<Error>;
}

export class ResetPwdInput {
  username!: Scalars['String'];
}

export type ChangePwdMutationVariables = Exact<{
  input: ChangePwdInput;
}>;

export type ChangePwdMutation = {
  __typename?: 'Mutation';
  changePwd?: boolean | null;
};

export type ResetPwdMutationVariables = Exact<{
  input: ResetPwdInput;
}>;

export type ResetPwdMutation = {
  __typename?: 'Mutation';
  resetPwd?: boolean | null;
};

export type ErrorQueryVariables = Exact<{ [key: string]: never }>;

export type ErrorQuery = {
  __typename?: 'Query';
  error?: {
    __typename?: 'Error';
    statusCode?: number | null;
    message?: string | null;
    location?: string | null;
    path?: string | null;
  } | null;
};

export const ChangePwdDocument = gql`
  mutation changePwd($input: ChangePwdInput!) {
    changePwd(input: $input)
  }
`;
export type ChangePwdMutationFn = Apollo.MutationFunction<
  ChangePwdMutation,
  ChangePwdMutationVariables
>;

/**
 * __useChangePwdMutation__
 *
 * To run a mutation, you first call `useChangePwdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePwdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePwdMutation, { data, loading, error }] = useChangePwdMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangePwdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ChangePwdMutation,
    ChangePwdMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ChangePwdMutation, ChangePwdMutationVariables>(
    ChangePwdDocument,
    options
  );
}
export type ChangePwdMutationHookResult = ReturnType<
  typeof useChangePwdMutation
>;
export type ChangePwdMutationResult = Apollo.MutationResult<ChangePwdMutation>;
export type ChangePwdMutationOptions = Apollo.BaseMutationOptions<
  ChangePwdMutation,
  ChangePwdMutationVariables
>;
export const ResetPwdDocument = gql`
  mutation resetPwd($input: ResetPwdInput!) {
    resetPwd(input: $input)
  }
`;
export type ResetPwdMutationFn = Apollo.MutationFunction<
  ResetPwdMutation,
  ResetPwdMutationVariables
>;

/**
 * __useResetPwdMutation__
 *
 * To run a mutation, you first call `useResetPwdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPwdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPwdMutation, { data, loading, error }] = useResetPwdMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useResetPwdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ResetPwdMutation,
    ResetPwdMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ResetPwdMutation, ResetPwdMutationVariables>(
    ResetPwdDocument,
    options
  );
}
export type ResetPwdMutationHookResult = ReturnType<typeof useResetPwdMutation>;
export type ResetPwdMutationResult = Apollo.MutationResult<ResetPwdMutation>;
export type ResetPwdMutationOptions = Apollo.BaseMutationOptions<
  ResetPwdMutation,
  ResetPwdMutationVariables
>;
export const ErrorDocument = gql`
  query Error {
    error {
      statusCode
      message
      location
      path
    }
  }
`;

/**
 * __useErrorQuery__
 *
 * To run a query within a React component, call `useErrorQuery` and pass it any options that fit your needs.
 * When your component renders, `useErrorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useErrorQuery({
 *   variables: {
 *   },
 * });
 */
export function useErrorQuery(
  baseOptions?: Apollo.QueryHookOptions<ErrorQuery, ErrorQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ErrorQuery, ErrorQueryVariables>(
    ErrorDocument,
    options
  );
}
export function useErrorLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ErrorQuery, ErrorQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ErrorQuery, ErrorQueryVariables>(
    ErrorDocument,
    options
  );
}
export type ErrorQueryHookResult = ReturnType<typeof useErrorQuery>;
export type ErrorLazyQueryHookResult = ReturnType<typeof useErrorLazyQuery>;
export type ErrorQueryResult = Apollo.QueryResult<
  ErrorQuery,
  ErrorQueryVariables
>;
