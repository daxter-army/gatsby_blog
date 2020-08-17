---
title: "Intersting facts about 🇨 language"
date: "2020-08-17"
description: "So let's see, how deep you know the roots of C language... "
---

<img src="https://images.unsplash.com/photo-1527427337751-fdca2f128ce5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="code screen">

**So let's begin**

>* **? :** is the only ternary operator in C language
>* **#include<header_file>** is same as **#include"header_file"**
>* Compiler generates assembly code, not machine code, then assembler generates the machine code
>* **sizeof** operator can't tell us the size of functions because **sizeof** operator works on **compile time** and **functions** load into memory at **run time**
>* **array[5]** is same as **5[array]**, because when you call array, it's get derefenced as *(**index** + array)*, so **a[i]** or **i[a]** makes no difference
>* We can use **#include** in strange places. Let's say we have a file *inception.txt*, containing "Pack my box with five dozen liquor jugs", then we can do like this =><br/>
    #include<stdio.h>
    int main(){
        printf #include"inception.txt";
        return 0;
    }
>* In **printf()** & **scanf()**, **f** stands for **FORMATTED** not **FUNCTION**
> * We can use **<:**, **:>** in the place of square brackets **[**, **]** and **<%**, **%>** in the place of curly braces **{**, **}**
    #include <stdio.h>
    main() <%
        int array<:10:> = <%1, 2, 3, 4, 5, 6, 7, 8, 9, 10%>;
        printf("array[5]: %d\n", array<:5:>);
    %>