#include<stdio.h>
#include<stdlib.h>

int main() {
  FILE *input, *output;
  char ch;

  input = fopen("app.txt", "r");
  if (input == NULL) {
    puts("File read error");
    exit(1);
  }

  output = fopen("aappenc.txt", "w");
  if (output == NULL) {
    puts("Unable to write file");
    exit(1);
  }

  do {
    ch = fgetc(input);
    //manipulate char
    fputc(ch*2, output);
  } while (ch != EOF);

  printf("Complete");

  fclose(input);
  fclose(output);

  return 0;
}
