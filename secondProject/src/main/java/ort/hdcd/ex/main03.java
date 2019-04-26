package ort.hdcd.ex;

import java.util.Scanner;

public class main03 {
	
	static final int MAX = 100;
	
	static String []name= new String[MAX];
	static String []gender=new String[MAX];
	static String []email=new String[MAX];
	static int []birth=new int[MAX];
	int i=0;
	static Scanner sc = new Scanner(System.in);
	
	
	public void Insert() 
	{
		System.out.print("회원번호를 지정하시오 >> ");
		i = sc.nextInt();
		System.out.print("이름을 입력하시오 >> ");
		name[i] = sc.next();
		
		System.out.print("성별을 입력하시오 M/F >> ");
		while(true)
		{	
			gender[i] = sc.next();
			if(gender[i].equals("m") || gender[i].equals("f"))
			{
				break;
			}
			else 
			{
				System.out.println("다시 성별을 입력하시오 m/f >>");
			}
		}
		
		System.out.print("이메일을 입력하시오 >> ");
		email[i] = sc.next();
		System.out.print("생년월일 입력하시오 >> ");
		birth[i] = sc.nextInt();
	}
	public void Print() 
	{
		System.out.print("열람할 회원번호를 지정하시오 >> ");
		i = sc.nextInt();
		System.out.println("이름 : "+name[i]);
		System.out.println("성별 : " + gender[i]);
		System.out.println("이메일 : " + email[i]);
		System.out.println("생년월일 : " + birth[i]);
	}
	public void Update() 
	{
		System.out.print("수정할 회원번호를 지정하시오 >> ");
		i = sc.nextInt();
		System.out.print("이름을 입력하시오 >> ");
		name[i] = sc.next();
		System.out.print("성별을 입력하시오 M/F >> ");
		while(true)
		{	
			gender[i] = sc.next();
			if(gender[i].equals("m") || gender[i].equals("f"))
			{
				break;
			}
			else 
			{
				System.out.println("다시 성별을 입력하시오 m/f >>");
			}
		}
		System.out.print("이메일을 입력하시오 >> ");
		email[i] = sc.next();
		System.out.print("생년월일 입력하시오 >> ");
		birth[i] = sc.nextInt();
	}
	public void Delete() 
	{
		System.out.print("삭제할 회원번호를 지정하시오 >> ");
		i = sc.nextInt();
		name[i] = null;
		gender[i] = null;
		email[i] = null;
		birth[i] = 0;
	}
	public void Quit() 
	{
		System.out.println("프로그램을 종료하겠습니다.");
		sc.close();
	}

	
	public static void main(String[] args) 
	{
		main03 m = new main03();
		while(true)
		{
			System.out.println("insert(/),print(p),update(u),delete(d),quit(q)");
			System.out.println("사용하실 정보를 선택하시오 -> ");
			String menu = sc.next();
			
			if (menu.equals("/"))
				m.Insert();
			else if (menu.equals("p"))
				m.Print();
			else if (menu.equals("u"))
				m.Update();
			else if (menu.equals("d"))
				m.Delete();
			else if (menu.equals("q")) 
			{
				m.Quit();
				break;
			}
			else 
				return;
		}
		
		
		sc.close();
		
	}	
	
}
	