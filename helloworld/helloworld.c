#include <stdio.h>

int main(int args, char* argv[])
{
    int k = 0;
    int h = 0;

    for(k = 33; k < 333333; k++)
        h = k + h;

    return 0;
}