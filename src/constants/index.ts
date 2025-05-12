import { Clock, Code2, Calendar, Users } from "lucide-react";

export const INTERVIEW_CATEGORY = [
  { id: "upcoming", title: "Upcoming Interviews", variant: "outline" },
  { id: "completed", title: "Completed", variant: "secondary" },
  { id: "succeeded", title: "Succeeded", variant: "default" },
  { id: "failed", title: "Failed", variant: "destructive" },
] as const;

export const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];

export const QUICK_ACTIONS = [
  {
    icon: Code2,
    title: "New Call",
    description: "Start an instant call",
    color: "primary",
    gradient: "from-primary/10 via-primary/5 to-transparent",
  },
  {
    icon: Users,
    title: "Join Interview",
    description: "Enter via invitation link",
    color: "purple-500",
    gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
  },
  {
    icon: Calendar,
    title: "Schedule",
    description: "Plan upcoming interviews",
    color: "blue-500",
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
  },
  {
    icon: Clock,
    title: "Recordings",
    description: "Access past interviews",
    color: "orange-500",
    gradient: "from-orange-500/10 via-orange-500/5 to-transparent",
  },
];

export const CODING_QUESTIONS: CodeQuestion[] = [
  {
    id: "two-sum",
    title: "Two Sum",
    description:
      "Given an array of integers `nums` and an integer `target`, return indices of the two numbers in the array such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}`,
      python: `def two_sum(nums, target):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
    }
}`,
    },
    constraints: [
      "2 ≤ nums.length ≤ 104",
      "-109 ≤ nums[i] ≤ 109",
      "-109 ≤ target ≤ 109",
      "Only one valid answer exists.",
    ],
  },
  {
    id: "reverse-string",
    title: "Reverse String",
    description:
      "Write a function that reverses a string. The input string is given as an array of characters `s`.\n\nYou must do this by modifying the input array in-place with O(1) extra memory.",
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}`,
      python: `def reverse_string(s):
    # Write your solution here
    pass`,
      java: `class Solution {
    public void reverseString(char[] s) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "palindrome-number",
    title: "Palindrome Number",
    description:
      "Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.\n\nAn integer is a palindrome when it reads the same forward and backward.",
    examples: [
      {
        input: "x = 121",
        output: "true",
        explanation: "121 reads as 121 from left to right and from right to left.",
      },
      {
        input: "x = -121",
        output: "false",
        explanation:
          "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.",
      },
    ],
    starterCode: {
      javascript: `function isPalindrome(x) {
  // Write your solution here
  
}`,
      python: `def is_palindrome(x):
    # Write your solution here
    pass`,
      java: `class Solution {
    public boolean isPalindrome(int x) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    "id": "longest-substring-without-repeating-characters",
    "title": "Longest Substring Without Repeating Characters",
    "description": "Given a string `s`, find the length of the longest substring without repeating characters.",
    "examples": [
      {
        "input": "s = \"abcabcbb\"",
        "output": "3",
        "explanation": "The answer is \"abc\", with the length of 3."
      },
      {
        "input": "s = \"bbbbb\"",
        "output": "1",
        "explanation": "The answer is \"b\", with the length of 1."
      }
    ],
    "starterCode": {
      "javascript": "function lengthOfLongestSubstring(s) {\n  // Write your solution here\n}",
      "python": "def length_of_longest_substring(s):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "0 ≤ s.length ≤ 5 * 10^4",
      "s consists of English letters, digits, symbols and spaces."
    ]
  },
  {
    "id": "permutations",
    "title": "Permutations",
    "description": "Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in any order.",
    "examples": [
      {
        "input": "nums = [1,2,3]",
        "output": "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"
      },
      {
        "input": "nums = [0,1]",
        "output": "[[0,1],[1,0]]"
      }
    ],
    "starterCode": {
      "javascript": "function permute(nums) {\n  // Write your solution here\n}",
      "python": "def permute(nums):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public List<List<Integer>> permute(int[] nums) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "1 ≤ nums.length ≤ 6",
      "-10 ≤ nums[i] ≤ 10",
      "All the integers of nums are unique."
    ]
  },
  {
    "id": "valid-parentheses",
    "title": "Valid Parentheses",
    "description": "Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\nAn input string is valid if:\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.",
    "examples": [
      {
        "input": "s = \"()\"",
        "output": "true"
      },
      {
        "input": "s = \"()[]{}\"",
        "output": "true"
      },
      {
        "input": "s = \"(]\"",
        "output": "false"
      }
    ],
    "starterCode": {
      "javascript": "function isValid(s) {\n  // Write your solution here\n}",
      "python": "def is_valid(s):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public boolean isValid(String s) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "1 ≤ s.length ≤ 10^4",
      "s consists of parentheses only '()[]{}'."
    ]
  },
  {
    "id": "add-two-numbers",
    "title": "Add Two Numbers",
    "description": "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
    "examples": [
      {
        "input": "l1 = [2,4,3], l2 = [5,6,4]",
        "output": "[7,0,8]",
        "explanation": "342 + 465 = 807."
      },
      {
        "input": "l1 = [0], l2 = [0]",
        "output": "[0]"
      }
    ],
    "starterCode": {
      "javascript": "function addTwoNumbers(l1, l2) {\n  // Write your solution here\n}",
      "python": "def add_two_numbers(l1, l2):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "The number of nodes in each linked list is in the range [1, 100].",
      "0 ≤ Node.val ≤ 9",
      "It is guaranteed that the list represents a number that does not have leading zeros."
    ]
  },
  {
    "id": "maximum-depth-of-binary-tree",
    "title": "Maximum Depth of Binary Tree",
    "description": "Given the root of a binary tree, return its maximum depth.\n\nA binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "3"
      },
      {
        "input": "root = [1,null,2]",
        "output": "2"
      }
    ],
    "starterCode": {
      "javascript": "function maxDepth(root) {\n  // Write your solution here\n}",
      "python": "def max_depth(root):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public int maxDepth(TreeNode root) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "The number of nodes in the tree is in the range [0, 10^4].",
      "-100 ≤ Node.val ≤ 100"
    ]
  },
  {
    "id": "reverse-a-number",
    "title": "Reverse a Number",
    "description": "Given an integer N, reverse its digits and return the reversed number.\n\nNote: The input number can be negative, and the reversed number should also be negative in that case.",
    "examples": [
      {
        "input": "N = 12345",
        "output": "54321"
      },
      {
        "input": "N = -9876",
        "output": "-6789"
      }
    ],
    "starterCode": {
      "javascript": "function reverseNumber(N) {\n  // Write your solution here\n}",
      "python": "def reverse_number(N):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public int reverseNumber(int N) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "-10^9 ≤ N ≤ 10^9"
    ]
  },
  {
    "id": "count-digits",
    "title": "Count Digits",
    "description": "Given an integer N, count the number of digits in the number.\n\nNote: The input number can be positive or negative.",
    "examples": [
      {
        "input": "N = 12345",
        "output": "5"
      },
      {
        "input": "N = -9876",
        "output": "4"
      }
    ],
    "starterCode": {
      "javascript": "function countDigits(N) {\n  // Write your solution here\n}",
      "python": "def count_digits(N):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public int countDigits(int N) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "-10^9 ≤ N ≤ 10^9"
    ]
  },
  {
    "id": "gcd-or-hcf",
    "title": "GCD Or HCF",
    "description": "Given two integers A and B, calculate their Greatest Common Divisor (GCD) or Highest Common Factor (HCF).\n\nThe GCD of two numbers is the largest positive integer that divides both numbers without leaving a remainder.",
    "examples": [
      {
        "input": "A = 6, B = 8",
        "output": "2"
      },
      {
        "input": "A = 14, B = 18",
        "output": "2"
      }
    ],
    "starterCode": {
      "javascript": "function findGCD(A, B) {\n  // Write your solution here\n}",
      "python": "def find_gcd(A, B):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public int findGCD(int A, int B) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "1 ≤ A, B ≤ 10^9"
    ]
  },
  {
    "id": "armstrong-numbers",
    "title": "Armstrong Numbers",
    "description": "Given a number N, check if it is an Armstrong number.\n\nAn Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits. For example, 153 = 1^3 + 5^3 + 3^3.",
    "examples": [
      {
        "input": "N = 153",
        "output": "true"
      },
      {
        "input": "N = 370",
        "output": "true"
      },
      {
        "input": "N = 371",
        "output": "true"
      },
      {
        "input": "N = 407",
        "output": "true"
      },
      {
        "input": "N = 123",
        "output": "false"
      }
    ],
    "starterCode": {
      "javascript": "function isArmstrong(N) {\n  // Write your solution here\n}",
      "python": "def is_armstrong(N):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public boolean isArmstrong(int N) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "1 ≤ N ≤ 10^6"
    ]
  },
  {
    "id": "print-divisors",
    "title": "Print all Divisors",
    "description": "Given an integer N, print all its divisors in ascending order.\n\nA divisor is an integer that divides N without leaving a remainder.",
    "examples": [
      {
        "input": "N = 12",
        "output": "[1, 2, 3, 4, 6, 12]"
      },
      {
        "input": "N = 25",
        "output": "[1, 5, 25]"
      }
    ],
    "starterCode": {
      "javascript": "function printDivisors(N) {\n  // Write your solution here\n}",
      "python": "def print_divisors(N):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public List<Integer> printDivisors(int N) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "1 ≤ N ≤ 10^6"
    ]
  },
  {
    "id": "check-prime",
    "title": "Check for Prime",
    "description": "Given an integer N, determine whether it is a prime number.\n\nA prime number is a natural number greater than 1 that is only divisible by 1 and itself.",
    "examples": [
      {
        "input": "N = 2",
        "output": "true"
      },
      {
        "input": "N = 17",
        "output": "true"
      },
      {
        "input": "N = 15",
        "output": "false"
      }
    ],
    "starterCode": {
      "javascript": "function isPrime(N) {\n  // Write your solution here\n}",
      "python": "def is_prime(N):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public boolean isPrime(int N) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "1 ≤ N ≤ 10^6"
    ]
  },
  {
    "id": "print-n-times",
    "title": "Print Something N Times",
    "description": "Given an integer N, use recursion to print a given statement N times.\n\nYou should use pure recursion to solve this problem without using any loops.",
    "examples": [
      {
        "input": "N = 5",
        "output": "Coding Ninjas\nCoding Ninjas\nCoding Ninjas\nCoding Ninjas\nCoding Ninjas"
      },
      {
        "input": "N = 3",
        "output": "Coding Ninjas\nCoding Ninjas\nCoding Ninjas"
      }
    ],
    "starterCode": {
      "javascript": "function printNTimes(N) {\n  // Write your recursive solution here\n}",
      "python": "def print_n_times(N):\n    # Write your recursive solution here\n    pass",
      "java": "class Solution {\n    public void printNTimes(int N) {\n        // Write your recursive solution here\n    }\n}"
    },
    "constraints": [
      "1 ≤ N ≤ 10^4"
    ]
  },
  {
    "id": "print-name-n-times",
    "title": "Print Name N Times",
    "description": "Given an integer N, use recursion to print your name N times.\n\nYou should use pure recursion to solve this problem without using any loops.",
    "examples": [
      {
        "input": "N = 5",
        "output": "Your Name\nYour Name\nYour Name\nYour Name\nYour Name"
      },
      {
        "input": "N = 3",
        "output": "Your Name\nYour Name\nYour Name"
      }
    ],
    "starterCode": {
      "javascript": "function printName(N) {\n  // Write your recursive solution here\n}",
      "python": "def print_name(N):\n    # Write your recursive solution here\n    pass",
      "java": "class Solution {\n    public void printName(int N) {\n        // Write your recursive solution here\n    }\n}"
    },
    "constraints": [
      "1 ≤ N ≤ 10^4"
    ]
  },
  {
    "id": "print-1-to-n",
    "title": "Print 1 to N using Recursion",
    "description": "Given an integer N, use recursion to print numbers from 1 to N in increasing order.\n\nYou should use pure recursion to solve this problem without using any loops.",
    "examples": [
      {
        "input": "N = 5",
        "output": "1 2 3 4 5"
      },
      {
        "input": "N = 3",
        "output": "1 2 3"
      }
    ],
    "starterCode": {
      "javascript": "function print1ToN(N) {\n  // Write your recursive solution here\n}",
      "python": "def print_1_to_n(N):\n    # Write your recursive solution here\n    pass",
      "java": "class Solution {\n    public void print1ToN(int N) {\n        // Write your recursive solution here\n    }\n}"
    },
    "constraints": [
      "1 ≤ N ≤ 10^4"
    ]
  },
  {
    "id": "print-n-to-1",
    "title": "Print N to 1 using Recursion",
    "description": "Given an integer N, use recursion to print numbers from N to 1 in decreasing order.\n\nYou should use pure recursion to solve this problem without using any loops.",
    "examples": [
      {
        "input": "N = 5",
        "output": "5 4 3 2 1"
      },
      {
        "input": "N = 3",
        "output": "3 2 1"
      }
    ],
    "starterCode": {
      "javascript": "function printNTo1(N) {\n  // Write your recursive solution here\n}",
      "python": "def print_n_to_1(N):\n    # Write your recursive solution here\n    pass",
      "java": "class Solution {\n    public void printNTo1(int N) {\n        // Write your recursive solution here\n    }\n}"
    },
    "constraints": [
      "1 ≤ N ≤ 10^4"
    ]
  },
  {
    "id": "sum-of-first-n",
    "title": "Sum of First N Numbers",
    "description": "Given an integer N, use recursion to calculate the sum of first N natural numbers.\n\nYou should use pure recursion to solve this problem without using any loops or mathematical formulas.",
    "examples": [
      {
        "input": "N = 5",
        "output": "15"
      },
      {
        "input": "N = 3",
        "output": "6"
      }
    ],
    "starterCode": {
      "javascript": "function sumOfFirstN(N) {\n  // Write your recursive solution here\n}",
      "python": "def sum_of_first_n(N):\n    # Write your recursive solution here\n    pass",
      "java": "class Solution {\n    public int sumOfFirstN(int N) {\n        // Write your recursive solution here\n    }\n}"
    },
    "constraints": [
      "1 ≤ N ≤ 10^4"
    ]
  },
  {
    "id": "factorial-of-n",
    "title": "Factorial of N Numbers",
    "description": "Given an integer N, use recursion to calculate the factorial of N.\n\nThe factorial of a non-negative integer N is the product of all positive integers less than or equal to N.",
    "examples": [
      {
        "input": "N = 5",
        "output": "120"
      },
      {
        "input": "N = 3",
        "output": "6"
      }
    ],
    "starterCode": {
      "javascript": "function factorial(N) {\n  // Write your recursive solution here\n}",
      "python": "def factorial(N):\n    # Write your recursive solution here\n    pass",
      "java": "class Solution {\n    public int factorial(int N) {\n        // Write your recursive solution here\n    }\n}"
    },
    "constraints": [
      "0 ≤ N ≤ 15"
    ]
  },
  {
    "id": "reverse-array",
    "title": "Reverse an Array",
    "description": "Given an array of integers, use recursion to reverse the array in-place.\n\nYou should modify the input array directly without using any additional space.",
    "examples": [
      {
        "input": "arr = [1, 2, 3, 4, 5]",
        "output": "[5, 4, 3, 2, 1]"
      },
      {
        "input": "arr = [10, 20, 30]",
        "output": "[30, 20, 10]"
      }
    ],
    "starterCode": {
      "javascript": "function reverseArray(arr) {\n  // Write your recursive solution here\n}",
      "python": "def reverse_array(arr):\n    # Write your recursive solution here\n    pass",
      "java": "class Solution {\n    public void reverseArray(int[] arr) {\n        // Write your recursive solution here\n    }\n}"
    },
    "constraints": [
      "1 ≤ arr.length ≤ 10^4",
      "-10^9 ≤ arr[i] ≤ 10^9"
    ]
  },
  {
    "id": "palindrome-string-recursion",
    "title": "Check if a String is Palindrome",
    "description": "Given a string, use recursion to determine whether it is a palindrome.\n\nA palindrome is a string that reads the same backward as forward. Ignore case sensitivity.",
    "examples": [
      {
        "input": "str = \"racecar\"",
        "output": "true"
      },
      {
        "input": "str = \"hello\"",
        "output": "false"
      },
      {
        "input": "str = \"A man a plan a canal Panama\"",
        "output": "true"
      }
    ],
    "starterCode": {
      "javascript": "function isPalindromeRecursive(str) {\n  // Write your recursive solution here\n}",
      "python": "def is_palindrome_recursive(str):\n    # Write your recursive solution here\n    pass",
      "java": "class Solution {\n    public boolean isPalindromeRecursive(String str) {\n        // Write your recursive solution here\n    }\n}"
    },
    "constraints": [
      "1 ≤ str.length ≤ 10^5",
      "str contains only alphanumeric characters"
    ]
  },
  {
    "id": "fibonacci-number",
    "title": "Fibonacci Number",
    "description": "Given an integer N, use recursion to return the Nth Fibonacci number.\n\nThe Fibonacci sequence is defined as follows:\n- F(0) = 0\n- F(1) = 1\n- F(n) = F(n-1) + F(n-2) for n > 1",
    "examples": [
      {
        "input": "N = 4",
        "output": "3"
      },
      {
        "input": "N = 5",
        "output": "5"
      }
    ],
    "starterCode": {
      "javascript": "function fibonacci(N) {\n  // Write your recursive solution here\n}",
      "python": "def fibonacci(N):\n    # Write your recursive solution here\n    pass",
      "java": "class Solution {\n    public int fibonacci(int N) {\n        // Write your recursive solution here\n    }\n}"
    },
    "constraints": [
      "0 ≤ N ≤ 30"
    ]
  },

];

export const LANGUAGES = [
  { id: "javascript", name: "JavaScript", icon: "/javascript.png" },
  { id: "python", name: "Python", icon: "/python.png" },
  { id: "java", name: "Java", icon: "/java.png" },
] as const;

export interface CodeQuestion {
  id: string;
  title: string;
  description: string;
  examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  starterCode: {
    javascript: string;
    python: string;
    java: string;
  };
  constraints?: string[];
}

export type QuickActionType = (typeof QUICK_ACTIONS)[number];