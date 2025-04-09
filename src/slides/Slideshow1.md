---
title: Introduction to Java
---

## Slide 1
A paragraph with some text and a [link](https://hakim.se).
---
This is a lot of text for one page, I wonder how you will format it.

1) 1
2) eoaga
3) ogoawg

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

---
This is a code block and a piece of text.

```java
import java.util.Scanner;

public class Main{
	// Instantiate Scanner object sc
	public static Scanner sc = new Scanner(System.in);

	public static void main(String[] args){
		// Get side lengths from user
		double sideA = getLength('A');
		double sideB = getLength('B');

		// Calculate perimeter
		double perimeter = calcPerimeter(sideA, sideB);
		// Print it out
		System.out.println("The perimeter is: " + perimeter);
	}

	// This is a JavaDoc comment. It's just a fancier version of comments like this.
	// If you plan on collaborating on big projects, consider learning this.
	/**
	* <h1>getLength()</h1>
	* Requests a side length from the user and returns their input
	* @param side Modifies which side is requested. This only effects the print statement
	* @return User input for the side length
	*/
	public static double getLength(char side){
		System.out.print("Please enter side length for " + side + ": ");
		return sc.nextDouble();
	}

	/**
	* <h1>Calculate perimeter</h1>
	* Calculates the perimeter of a right triangle given two side lengths A and B
	* @param sideA Side A of the triangle
	* @param sideB Side B of the triangle
	* @return The perimeter of the triangle
	*/
	public static double calcPerimeter(double sideA, double sideB){
		return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
	}
}
```