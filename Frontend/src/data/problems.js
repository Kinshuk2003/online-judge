export const problemConstant = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array",
    acceptance: "48.5%",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers that add up to target."
  },
  {
    id: 2,
    title: "Add Two Numbers",
    difficulty: "Medium",
    category: "Linked List",
    acceptance: "39.2%",
    description: "You are given two non-empty linked lists representing two non-negative integers."
  },
  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "String",
    acceptance: "33.8%",
    description: "Find the length of the longest substring without repeating characters."
  },
  {
    id: 4,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    category: "Array",
    acceptance: "35.1%",
    description: "Given two sorted arrays nums1 and nums2, return the median of the two sorted arrays."
  }
];

export const problemDes = {
  "_id": "64d62ff644932d905423720c",
  "id": "two-sum",
  "title": "Two Sum",
  "difficult": "Easy",
  "category": "Array",
  "order": 1,
  "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.",
  "examples": [
      {
          "input": "nums = [2,7,11,15], target = 9",
          "output": "[0,1]",
          "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]"
      },
      {
          "input": "nums = [3,2,4], target = 6",
          "output": "[1,2]",
          "explanation": ""
      }
  ],
  "constraints": [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists."
  ],
  "testcases": [
      {
          "input": "[2,7,11,15]",
          "output": "9"
      },
      {
          "input": "[3,2,4]",
          "output": "6"
      }
  ]
}