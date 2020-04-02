#define LIST_INIT_SIZE 100
#define LIST_INCREAMENT 10
#include <stdio.h>
#include <stdlib.h>

typedef struct SqList
{
  int *elem;
  int length;
  int list_size;
} Sqlist, *Ptr;

enum Status {
  SUCCESS, ERROR
};

enum Status List_init(Ptr L)
{
  enum Status s = SUCCESS;
  L->list_size = LIST_INIT_SIZE;
  L->length = 0;
  L->elem = (int *)malloc(sizeof(int) * L->list_size);
  if(L->elem == NULL) {
    s = ERROR;
  }
  return s;
}

int main()
{
  Ptr L;
  List_init(L);
  printf("%d \n p=%p\n", L->list_size, &L);
  return 0;
}