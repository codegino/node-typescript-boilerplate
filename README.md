# Interview Challenge

## The solution should model out the King Arthur family tree so that:

- You should be able to add a child to any family in the tree through the mother
- Given a ‘name’ and a ‘relationship’, you should output the people corresponding to the relationship in the order in which they are added to the family tree

## Test Cases:

[] ADD_CHILD InvalidMother Child1 Male -> PERSON_NOT_FOUND
[] ADD_CHILD Arthur Child1 Male -> CHILD_ADDITION_FAILED
[] ADD_CHILD Margaret Child1 Female -> CHILD_ADDED
[] ADD_CHILD Margaret Child2 Male -> CHILD_ADDED

[] GET_RELATIONSHIP Name InvalidRelationship -> NONE
[] GET_RELATIONSHIP NoRelative Siblings -> NONE
[] GET_RELATIONSHIP Child1 Siblings -> Child2, Child3

## Extra

### All Relationships

- Paternal-Uncle
- Maternal-Uncle
- Paternal-Aunt
- Maternal-Aunt
- Sister-In-Law
- Brother-In-Law
- Son
- Daughter
- Siblings
